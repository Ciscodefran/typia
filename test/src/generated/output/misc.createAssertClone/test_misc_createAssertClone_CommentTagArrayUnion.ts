import typia from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_misc_createAssertClone_CommentTagArrayUnion =
  _test_misc_assertClone("CommentTagArrayUnion")<CommentTagArrayUnion>(
    CommentTagArrayUnion,
  )((input: any): typia.Resolved<CommentTagArrayUnion> => {
    const assert = (input: any): CommentTagArrayUnion => {
      const __is = (input: any): input is CommentTagArrayUnion => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.items) &&
          3 <= input.items.length &&
          input.items.length <= 3 &&
          input.items.every((elem: any) => "string" === typeof elem) &&
          Array.isArray(input.minItems) &&
          3 <= input.minItems.length &&
          input.minItems.every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          ) &&
          Array.isArray(input.maxItems) &&
          input.maxItems.length <= 7 &&
          input.maxItems.every(
            (elem: any) =>
              "string" === typeof elem ||
              ("number" === typeof elem && Number.isFinite(elem)),
          ) &&
          Array.isArray(input.both) &&
          3 <= input.both.length &&
          input.both.length <= 7 &&
          input.both.every((elem: any) => "string" === typeof elem);
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is CommentTagArrayUnion => {
          const $guard = (typia.misc.createAssertClone as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((Array.isArray(input.items) ||
              $guard(_exceptionable, {
                path: _path + ".items",
                expected: "(Array<string> & MinItems<3> & MaxItems<3>)",
                value: input.items,
              })) &&
              (3 <= input.items.length ||
                $guard(_exceptionable, {
                  path: _path + ".items",
                  expected: "Array<> & MinItems<3>",
                  value: input.items,
                })) &&
              (input.items.length <= 3 ||
                $guard(_exceptionable, {
                  path: _path + ".items",
                  expected: "Array<> & MaxItems<3>",
                  value: input.items,
                })) &&
              input.items.every(
                (elem: any, _index2: number) =>
                  "string" === typeof elem ||
                  $guard(_exceptionable, {
                    path: _path + ".items[" + _index2 + "]",
                    expected: "string",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".items",
                expected: "(Array<string> & MinItems<3> & MaxItems<3>)",
                value: input.items,
              })) &&
            (((Array.isArray(input.minItems) ||
              $guard(_exceptionable, {
                path: _path + ".minItems",
                expected: "(Array<number> & MinItems<3>)",
                value: input.minItems,
              })) &&
              (3 <= input.minItems.length ||
                $guard(_exceptionable, {
                  path: _path + ".minItems",
                  expected: "Array<> & MinItems<3>",
                  value: input.minItems,
                })) &&
              input.minItems.every(
                (elem: any, _index3: number) =>
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  $guard(_exceptionable, {
                    path: _path + ".minItems[" + _index3 + "]",
                    expected: "number",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".minItems",
                expected: "(Array<number> & MinItems<3>)",
                value: input.minItems,
              })) &&
            (((Array.isArray(input.maxItems) ||
              $guard(_exceptionable, {
                path: _path + ".maxItems",
                expected: "(Array<string | number> & MaxItems<7>)",
                value: input.maxItems,
              })) &&
              (input.maxItems.length <= 7 ||
                $guard(_exceptionable, {
                  path: _path + ".maxItems",
                  expected: "Array<> & MaxItems<7>",
                  value: input.maxItems,
                })) &&
              input.maxItems.every(
                (elem: any, _index4: number) =>
                  "string" === typeof elem ||
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  $guard(_exceptionable, {
                    path: _path + ".maxItems[" + _index4 + "]",
                    expected: "(number | string)",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".maxItems",
                expected: "(Array<string | number> & MaxItems<7>)",
                value: input.maxItems,
              })) &&
            (((Array.isArray(input.both) ||
              $guard(_exceptionable, {
                path: _path + ".both",
                expected: "(Array<string> & MinItems<3> & MaxItems<7>)",
                value: input.both,
              })) &&
              (3 <= input.both.length ||
                $guard(_exceptionable, {
                  path: _path + ".both",
                  expected: "Array<> & MinItems<3>",
                  value: input.both,
                })) &&
              (input.both.length <= 7 ||
                $guard(_exceptionable, {
                  path: _path + ".both",
                  expected: "Array<> & MaxItems<7>",
                  value: input.both,
                })) &&
              input.both.every(
                (elem: any, _index5: number) =>
                  "string" === typeof elem ||
                  $guard(_exceptionable, {
                    path: _path + ".both[" + _index5 + "]",
                    expected: "string",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".both",
                expected: "(Array<string> & MinItems<3> & MaxItems<7>)",
                value: input.both,
              }));
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "CommentTagArrayUnion",
                value: input,
              })) &&
              input.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected: "CommentTagArrayUnion.Type",
                      value: elem,
                    })) &&
                    $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: "CommentTagArrayUnion.Type",
                    value: elem,
                  }),
              )) ||
            $guard(true, {
              path: _path + "",
              expected: "CommentTagArrayUnion",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const clone = (
      input: CommentTagArrayUnion,
    ): typia.Resolved<CommentTagArrayUnion> => {
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co0(elem)
            : (elem as any),
        );
      const $cp1 = (input: any) => input.map((elem: any) => elem as any);
      const $cp2 = (input: any) => input.map((elem: any) => elem as any);
      const $cp3 = (input: any) => input.map((elem: any) => elem as any);
      const $co0 = (input: any): any => ({
        items: Array.isArray(input.items)
          ? $cp1(input.items)
          : (input.items as any),
        minItems: Array.isArray(input.minItems)
          ? $cp2(input.minItems)
          : (input.minItems as any),
        maxItems: Array.isArray(input.maxItems)
          ? $cp3(input.maxItems)
          : (input.maxItems as any),
        both: Array.isArray(input.both)
          ? $cp1(input.both)
          : (input.both as any),
      });
      return Array.isArray(input) ? $cp0(input) : (input as any);
    };
    assert(input);
    const output = clone(input);
    return output;
  });
