import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_is } from "../internal/_test_is";

export const test_is_ClassClosure = _test_is(
    "ClassClosure",
    ClassClosure.generate,
    (input) => TSON.is(input),
    ClassClosure.SPOILERS,
);