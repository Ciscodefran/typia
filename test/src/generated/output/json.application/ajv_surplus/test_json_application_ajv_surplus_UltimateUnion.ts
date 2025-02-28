import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { UltimateUnion } from "../../../../structures/UltimateUnion";

export const test_json_application_ajv_surplus_UltimateUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "UltimateUnion",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/UltimateUnion",
      },
    ],
    components: {
      schemas: {
        UltimateUnion: {
          $id: "#/components/schemas/UltimateUnion",
          type: "array",
          items: {
            $ref: "#/components/schemas/IJsonApplication",
          },
        },
        IJsonApplication: {
          $id: "#/components/schemas/IJsonApplication",
          type: "object",
          properties: {
            schemas: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsonSchema",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            components: {
              $ref: "#/components/schemas/IJsonComponents",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            purpose: {
              type: "string",
              enum: ["swagger", "ajv"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            surplus: {
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["schemas", "components", "purpose", "surplus"],
          "x-typia-jsDocTags": [],
        },
        IJsonSchema: {
          $id: "#/components/schemas/IJsonSchema",
          oneOf: [
            {
              $ref: "#/components/schemas/IJsonSchema.IEnumerationboolean",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IEnumerationnumber",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IEnumerationstring",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IBoolean",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IInteger",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.INumber",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IString",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IArray",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.ITuple",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IObject",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IReference",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.INullOnly",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IOneOf",
            },
            {
              $ref: "#/components/schemas/IJsonSchema.IUnknown",
            },
          ],
        },
        "IJsonSchema.IEnumerationboolean": {
          $id: "#/components/schemas/IJsonSchema.IEnumerationboolean",
          type: "object",
          properties: {
            enum: {
              type: "array",
              items: {
                type: "boolean",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            type: {
              type: "string",
              enum: ["boolean"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            default: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["enum", "type"],
          "x-typia-jsDocTags": [],
        },
        IJsDocTagInfo: {
          $id: "#/components/schemas/IJsDocTagInfo",
          type: "object",
          properties: {
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            text: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo.IText",
              },
              "x-typia-required": true,
              "x-typia-optional": true,
            },
          },
          required: ["name"],
          "x-typia-jsDocTags": [],
        },
        "IJsDocTagInfo.IText": {
          $id: "#/components/schemas/IJsDocTagInfo.IText",
          type: "object",
          properties: {
            text: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            kind: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          required: ["text", "kind"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IEnumerationnumber": {
          $id: "#/components/schemas/IJsonSchema.IEnumerationnumber",
          type: "object",
          properties: {
            enum: {
              type: "array",
              items: {
                type: "number",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            type: {
              type: "string",
              enum: ["number"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            default: {
              type: "number",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["enum", "type"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IEnumerationstring": {
          $id: "#/components/schemas/IJsonSchema.IEnumerationstring",
          type: "object",
          properties: {
            enum: {
              type: "array",
              items: {
                type: "string",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            type: {
              type: "string",
              enum: ["string"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            default: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["enum", "type"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IBoolean": {
          $id: "#/components/schemas/IJsonSchema.IBoolean",
          type: "object",
          properties: {
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            default: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            type: {
              type: "string",
              enum: ["boolean"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        IMetadataTypeTag: {
          $id: "#/components/schemas/IMetadataTypeTag",
          type: "object",
          properties: {
            target: {
              type: "string",
              enum: ["string", "number", "bigint", "boolean", "array"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            kind: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            exclusive: {
              oneOf: [
                {
                  type: "boolean",
                },
                {
                  type: "array",
                  items: {
                    type: "string",
                  },
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            value: {
              "x-typia-required": true,
              "x-typia-optional": true,
            },
            validate: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["target", "name", "kind", "exclusive"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IInteger": {
          $id: "#/components/schemas/IJsonSchema.IInteger",
          type: "object",
          properties: {
            minimum: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            maximum: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            exclusiveMinimum: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            exclusiveMaximum: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            multipleOf: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            default: {
              type: "number",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            type: {
              type: "string",
              enum: ["integer"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.INumber": {
          $id: "#/components/schemas/IJsonSchema.INumber",
          type: "object",
          properties: {
            minimum: {
              type: "number",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            maximum: {
              type: "number",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            exclusiveMinimum: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            exclusiveMaximum: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            multipleOf: {
              type: "number",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            default: {
              type: "number",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            type: {
              type: "string",
              enum: ["number"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IString": {
          $id: "#/components/schemas/IJsonSchema.IString",
          type: "object",
          properties: {
            minLength: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            maxLength: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            pattern: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            format: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            default: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            type: {
              type: "string",
              enum: ["string"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IArray": {
          $id: "#/components/schemas/IJsonSchema.IArray",
          type: "object",
          properties: {
            items: {
              $ref: "#/components/schemas/IJsonSchema",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            minItems: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            maxItems: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-tuple": {
              $ref: "#/components/schemas/IJsonSchema.ITuple",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            type: {
              type: "string",
              enum: ["array"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["items", "type"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.ITuple": {
          $id: "#/components/schemas/IJsonSchema.ITuple",
          type: "object",
          properties: {
            items: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsonSchema",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            minItems: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            maxItems: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            type: {
              type: "string",
              enum: ["array"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["items", "minItems", "type"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IObject": {
          $id: "#/components/schemas/IJsonSchema.IObject",
          type: "object",
          properties: {
            properties: {
              $ref: "#/components/schemas/RecordstringIJsonSchema",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            required: {
              type: "array",
              items: {
                type: "string",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            patternProperties: {
              $ref: "#/components/schemas/RecordstringIJsonSchema",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            additionalProperties: {
              oneOf: [
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationstring",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationnumber",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationboolean",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IBoolean",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.INumber",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IInteger",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IString",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IArray",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.ITuple",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IObject",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IReference",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.INullOnly",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IOneOf",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IUnknown",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-patternProperties": {
              $ref: "#/components/schemas/RecordstringIJsonSchema",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-additionalProperties": {
              oneOf: [
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationstring",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationnumber",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationboolean",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IBoolean",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.INumber",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IInteger",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IString",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IArray",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.ITuple",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IObject",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IReference",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.INullOnly",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IOneOf",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IUnknown",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            type: {
              type: "string",
              enum: ["object"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["properties", "type"],
          "x-typia-jsDocTags": [],
        },
        RecordstringIJsonSchema: {
          $id: "#/components/schemas/RecordstringIJsonSchema",
          type: "object",
          properties: {},
          description: "Construct a type with a set of properties K of type T",
          "x-typia-jsDocTags": [],
          additionalProperties: {
            $ref: "#/components/schemas/IJsonSchema",
            "x-typia-required": true,
            "x-typia-optional": false,
          },
        },
        "IJsonSchema.IReference": {
          $id: "#/components/schemas/IJsonSchema.IReference",
          type: "object",
          properties: {
            $ref: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["$ref"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.INullOnly": {
          $id: "#/components/schemas/IJsonSchema.INullOnly",
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["null"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IOneOf": {
          $id: "#/components/schemas/IJsonSchema.IOneOf",
          type: "object",
          properties: {
            oneOf: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsonSchema",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["oneOf"],
          "x-typia-jsDocTags": [],
        },
        "IJsonSchema.IUnknown": {
          $id: "#/components/schemas/IJsonSchema.IUnknown",
          type: "object",
          properties: {
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          "x-typia-jsDocTags": [],
        },
        IJsonComponents: {
          $id: "#/components/schemas/IJsonComponents",
          type: "object",
          properties: {
            schemas: {
              $ref: "#/components/schemas/RecordstringIJsonComponents.IAlias",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          "x-typia-jsDocTags": [],
        },
        "RecordstringIJsonComponents.IAlias": {
          $id: "#/components/schemas/RecordstringIJsonComponents.IAlias",
          type: "object",
          properties: {},
          description: "Construct a type with a set of properties K of type T",
          "x-typia-jsDocTags": [],
          additionalProperties: {
            $ref: "#/components/schemas/IJsonComponents.IAlias",
            "x-typia-required": true,
            "x-typia-optional": false,
          },
        },
        "IJsonComponents.IAlias": {
          $id: "#/components/schemas/IJsonComponents.IAlias",
          oneOf: [
            {
              $ref: "#/components/schemas/IEnumerationbooleanIIdentified",
            },
            {
              $ref: "#/components/schemas/IEnumerationnumberIIdentified",
            },
            {
              $ref: "#/components/schemas/IEnumerationstringIIdentified",
            },
            {
              $ref: "#/components/schemas/IBooleanIIdentified",
            },
            {
              $ref: "#/components/schemas/IIntegerIIdentified",
            },
            {
              $ref: "#/components/schemas/INumberIIdentified",
            },
            {
              $ref: "#/components/schemas/IStringIIdentified",
            },
            {
              $ref: "#/components/schemas/IArrayIIdentified",
            },
            {
              $ref: "#/components/schemas/ITupleIIdentified",
            },
            {
              $ref: "#/components/schemas/IObjectIIdentified",
            },
            {
              $ref: "#/components/schemas/IReferenceIIdentified",
            },
            {
              $ref: "#/components/schemas/INullOnlyIIdentified",
            },
            {
              $ref: "#/components/schemas/IOneOfIIdentified",
            },
            {
              $ref: "#/components/schemas/IUnknownIIdentified",
            },
          ],
        },
        IEnumerationbooleanIIdentified: {
          $id: "#/components/schemas/IEnumerationbooleanIIdentified",
          type: "object",
          properties: {
            enum: {
              type: "array",
              items: {
                type: "boolean",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            type: {
              type: "string",
              enum: ["boolean"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            default: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $id: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $recursiveAnchor: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["enum", "type"],
          "x-typia-jsDocTags": [],
        },
        IEnumerationnumberIIdentified: {
          $id: "#/components/schemas/IEnumerationnumberIIdentified",
          type: "object",
          properties: {
            enum: {
              type: "array",
              items: {
                type: "number",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            type: {
              type: "string",
              enum: ["number"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            default: {
              type: "number",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $id: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $recursiveAnchor: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["enum", "type"],
          "x-typia-jsDocTags": [],
        },
        IEnumerationstringIIdentified: {
          $id: "#/components/schemas/IEnumerationstringIIdentified",
          type: "object",
          properties: {
            enum: {
              type: "array",
              items: {
                type: "string",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            type: {
              type: "string",
              enum: ["string"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            default: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $id: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $recursiveAnchor: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["enum", "type"],
          "x-typia-jsDocTags": [],
        },
        IBooleanIIdentified: {
          $id: "#/components/schemas/IBooleanIIdentified",
          type: "object",
          properties: {
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            default: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            type: {
              type: "string",
              enum: ["boolean"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $id: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $recursiveAnchor: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        IIntegerIIdentified: {
          $id: "#/components/schemas/IIntegerIIdentified",
          type: "object",
          properties: {
            minimum: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            maximum: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            exclusiveMinimum: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            exclusiveMaximum: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            multipleOf: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"int32">',
                  kind: "type",
                  value: "int32",
                  validate:
                    "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                  exclusive: true,
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            default: {
              type: "number",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            type: {
              type: "string",
              enum: ["integer"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $id: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $recursiveAnchor: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        INumberIIdentified: {
          $id: "#/components/schemas/INumberIIdentified",
          type: "object",
          properties: {
            minimum: {
              type: "number",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            maximum: {
              type: "number",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            exclusiveMinimum: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            exclusiveMaximum: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            multipleOf: {
              type: "number",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            default: {
              type: "number",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            type: {
              type: "string",
              enum: ["number"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $id: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $recursiveAnchor: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        IStringIIdentified: {
          $id: "#/components/schemas/IStringIIdentified",
          type: "object",
          properties: {
            minLength: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            maxLength: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            pattern: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            format: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            default: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            type: {
              type: "string",
              enum: ["string"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $id: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $recursiveAnchor: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        IArrayIIdentified: {
          $id: "#/components/schemas/IArrayIIdentified",
          type: "object",
          properties: {
            items: {
              $ref: "#/components/schemas/IJsonSchema",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            minItems: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            maxItems: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-tuple": {
              $ref: "#/components/schemas/IJsonSchema.ITuple",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-typeTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IMetadataTypeTag",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            type: {
              type: "string",
              enum: ["array"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $id: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $recursiveAnchor: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["items", "type"],
          "x-typia-jsDocTags": [],
        },
        ITupleIIdentified: {
          $id: "#/components/schemas/ITupleIIdentified",
          type: "object",
          properties: {
            items: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsonSchema",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            minItems: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            maxItems: {
              type: "integer",
              "x-typia-typeTags": [
                {
                  target: "number",
                  name: 'Type<"uint32">',
                  kind: "type",
                  value: "uint32",
                  validate:
                    "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                  exclusive: true,
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            type: {
              type: "string",
              enum: ["array"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $id: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $recursiveAnchor: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["items", "minItems", "type"],
          "x-typia-jsDocTags": [],
        },
        IObjectIIdentified: {
          $id: "#/components/schemas/IObjectIIdentified",
          type: "object",
          properties: {
            properties: {
              $ref: "#/components/schemas/RecordstringIJsonSchema",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            required: {
              type: "array",
              items: {
                type: "string",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            patternProperties: {
              $ref: "#/components/schemas/RecordstringIJsonSchema",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            additionalProperties: {
              oneOf: [
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationstring",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationnumber",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationboolean",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IBoolean",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.INumber",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IInteger",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IString",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IArray",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.ITuple",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IObject",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IReference",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.INullOnly",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IOneOf",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IUnknown",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-patternProperties": {
              $ref: "#/components/schemas/RecordstringIJsonSchema",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-additionalProperties": {
              oneOf: [
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationstring",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationnumber",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IEnumerationboolean",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IBoolean",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.INumber",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IInteger",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IString",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IArray",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.ITuple",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IObject",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IReference",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.INullOnly",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IOneOf",
                },
                {
                  $ref: "#/components/schemas/IJsonSchema.IUnknown",
                },
              ],
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            type: {
              type: "string",
              enum: ["object"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            nullable: {
              type: "boolean",
              description: "Only when swagger mode.",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $id: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $recursiveAnchor: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["properties", "type"],
          "x-typia-jsDocTags": [],
        },
        IReferenceIIdentified: {
          $id: "#/components/schemas/IReferenceIIdentified",
          type: "object",
          properties: {
            $ref: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $id: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $recursiveAnchor: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["$ref"],
          "x-typia-jsDocTags": [],
        },
        INullOnlyIIdentified: {
          $id: "#/components/schemas/INullOnlyIIdentified",
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["null"],
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $id: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $recursiveAnchor: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["type"],
          "x-typia-jsDocTags": [],
        },
        IOneOfIIdentified: {
          $id: "#/components/schemas/IOneOfIIdentified",
          type: "object",
          properties: {
            oneOf: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsonSchema",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $id: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $recursiveAnchor: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          required: ["oneOf"],
          "x-typia-jsDocTags": [],
        },
        IUnknownIIdentified: {
          $id: "#/components/schemas/IUnknownIIdentified",
          type: "object",
          properties: {
            deprecated: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            title: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            description: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-jsDocTags": {
              type: "array",
              items: {
                $ref: "#/components/schemas/IJsDocTagInfo",
              },
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-required": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-optional": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            "x-typia-rest": {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $id: {
              type: "string",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
            $recursiveAnchor: {
              type: "boolean",
              "x-typia-required": false,
              "x-typia-optional": true,
            },
          },
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
    surplus: true,
  });
