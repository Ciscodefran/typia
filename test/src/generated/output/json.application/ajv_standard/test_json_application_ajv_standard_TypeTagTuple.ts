import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagTuple } from "../../../../structures/TypeTagTuple";

export const test_json_application_ajv_standard_TypeTagTuple =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TypeTagTuple",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/TypeTagTuple",
      },
    ],
    components: {
      schemas: {
        TypeTagTuple: {
          $id: "#/components/schemas/TypeTagTuple",
          type: "object",
          properties: {
            tuple: {
              type: "array",
              items: [
                {
                  type: "string",
                  maxLength: 7,
                  minLength: 3,
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
                {
                  type: "number",
                  maximum: 7,
                  minimum: 3,
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
                {
                  type: "array",
                  items: {
                    type: "string",
                    maxLength: 2,
                    minLength: 1,
                  },
                  maxItems: 7,
                  minItems: 3,
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
                {
                  type: "array",
                  items: {
                    type: "number",
                    maximum: 2,
                    minimum: 1,
                  },
                  maxItems: 7,
                  minItems: 3,
                  "x-typia-rest": false,
                  "x-typia-required": true,
                  "x-typia-optional": false,
                },
              ],
              minItems: 4,
              maxItems: 4,
            },
          },
          required: ["tuple"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
