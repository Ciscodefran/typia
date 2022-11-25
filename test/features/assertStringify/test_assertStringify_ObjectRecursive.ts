import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectRecursive = _test_assertStringify(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => TSON.assertStringify(input),
    ObjectRecursive.SPOILERS,
);