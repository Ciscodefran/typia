import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_assertGuardEquals_ToJsonNull = _test_assertGuardEquals(
  "ToJsonNull",
)<ToJsonNull>(ToJsonNull)((input) =>
  ((input: any): asserts input is ToJsonNull => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ToJsonNull => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "function" === typeof input.toJSON &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["toJSON"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ToJsonNull => {
        const $guard = (typia.assertGuardEquals as any).guard;
        const $join = (typia.assertGuardEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("function" === typeof input.toJSON ||
            $guard(_exceptionable, {
              path: _path + ".toJSON",
              expected: "unknown",
              value: input.toJSON,
            })) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["toJSON"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ToJsonNull",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ToJsonNull",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input),
);
