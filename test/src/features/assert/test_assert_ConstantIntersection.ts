import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_assert_ConstantIntersection = _test_assert(
  "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)((input) =>
  typia.assert<ConstantIntersection>(input),
);
