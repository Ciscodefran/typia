import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_json_application_swagger_standard_ObjectPropertyNullable =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectPropertyNullable",
  })(typia.json.application<[ObjectPropertyNullable], "swagger", false>());
