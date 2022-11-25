import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ArrayRecursive = _test_isClone(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => TSON.isClone(input),
    ArrayRecursive.SPOILERS,
);