import typia from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_message } from "../internal/_test_message";

export const test_message_AtomicSimple = _test_message(
    "AtomicSimple",
    typia.message<AtomicSimple>(),
    `syntax = \"proto3\";

message __Main {
    [boolean, number, string] value = 1;
}

message _alt_boolean_comma__space_number_comma__space_string_agt_ {
    bool v0 = 1;
    double v1 = 2;
    string v2 = 3;
}`
);