import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createAssertGuardEquals_TupleRestObject =
  _test_assertGuardEquals("TupleRestObject")<TupleRestObject>(TupleRestObject)(
    typia.createAssertGuardEquals<TupleRestObject>(),
  );
