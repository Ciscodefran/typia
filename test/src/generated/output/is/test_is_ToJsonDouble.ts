import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_is_ToJsonDouble = _test_is("ToJsonDouble")<ToJsonDouble>(
  ToJsonDouble,
)((input) =>
  ((input: any): input is ToJsonDouble => {
    return "object" === typeof input && null !== input && true;
  })(input),
);
