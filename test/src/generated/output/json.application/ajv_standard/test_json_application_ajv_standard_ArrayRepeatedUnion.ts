import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRepeatedUnion } from "../../../../structures/ArrayRepeatedUnion";

export const test_json_application_ajv_standard_ArrayRepeatedUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ArrayRepeatedUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRepeatedUnion",
      },
    ],
    components: {
      schemas: {
        ArrayRepeatedUnion: {
          $id: "#/components/schemas/ArrayRepeatedUnion",
          oneOf: [
            {
              type: "number",
            },
            {
              type: "boolean",
            },
            {
              type: "array",
              items: {
                type: "string",
              },
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRepeatedUnion",
              },
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRepeatedUnion.IBox3D",
              },
            },
          ],
        },
        "ArrayRepeatedUnion.IBox3D": {
          $id: "#/components/schemas/ArrayRepeatedUnion.IBox3D",
          type: "object",
          properties: {
            scale: {
              $ref: "#/components/schemas/ArrayRepeatedUnion.IPoint3D",
            },
            position: {
              $ref: "#/components/schemas/ArrayRepeatedUnion.IPoint3D",
            },
            rotate: {
              $ref: "#/components/schemas/ArrayRepeatedUnion.IPoint3D",
            },
            pivot: {
              $ref: "#/components/schemas/ArrayRepeatedUnion.IPoint3D",
            },
          },
          required: ["scale", "position", "rotate", "pivot"],
        },
        "ArrayRepeatedUnion.IPoint3D": {
          $id: "#/components/schemas/ArrayRepeatedUnion.IPoint3D",
          type: "object",
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
            z: {
              type: "number",
            },
          },
          required: ["x", "y", "z"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
