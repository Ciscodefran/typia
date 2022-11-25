import { $proto_size_varint } from "../../../src/functional/$proto_size";
import { $varint_encode } from "../../../src/functional/$varint";

export const test_$proto_size_varint = () => {
    const buffer = new Uint8Array(1024);
    let offset = 0;
    for (let i = -1000000; i < 1000000; i++) {
        offset = 0;
        const value = i * 1000;
        const expected = $proto_size_varint(value);
        offset = $varint_encode(buffer, offset, value);
        const actual = offset;

        if (expected !== actual) {
            throw new Error(
                `expected ${expected} but got ${actual} for ${value}`,
            );
        }
    }
};
