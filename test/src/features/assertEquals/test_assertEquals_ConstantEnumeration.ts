import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_assertEquals_ConstantEnumeration = _test_assertEquals(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)((input) =>
  typia.assertEquals<ConstantEnumeration>(input),
);
