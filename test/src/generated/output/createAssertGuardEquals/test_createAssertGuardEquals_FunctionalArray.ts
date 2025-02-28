import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { FunctionalArray } from "../../../structures/FunctionalArray";

export const test_createAssertGuardEquals_FunctionalArray =
  _test_assertGuardEquals("FunctionalArray")<FunctionalArray>(FunctionalArray)(
    (input: any): asserts input is FunctionalArray => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is FunctionalArray => {
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any, _index1: number) => "function" === typeof elem,
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is FunctionalArray => {
          const $guard = (typia.createAssertGuardEquals as any).guard;
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "FunctionalArray",
                value: input,
              })) &&
              input.every(
                (elem: any, _index1: number) =>
                  "function" === typeof elem ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: "unknown",
                    value: elem,
                  }),
              )) ||
            $guard(true, {
              path: _path + "",
              expected: "FunctionalArray",
              value: input,
            })
          );
        })(input, "$input", true);
    },
  );
