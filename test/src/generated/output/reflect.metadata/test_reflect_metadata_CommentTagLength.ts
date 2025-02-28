import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_reflect_metadata_CommentTagLength = _test_reflect_metadata(
  "CommentTagLength",
)({
  metadatas: [
    {
      any: false,
      required: true,
      optional: false,
      nullable: false,
      functional: false,
      atomics: [],
      constants: [],
      templates: [],
      escaped: null,
      rest: null,
      arrays: [],
      tuples: [],
      objects: ["CommentTagLength"],
      aliases: [],
      natives: [],
      sets: [],
      maps: [],
    },
  ],
  components: {
    objects: [
      {
        name: "CommentTagLength",
        properties: [
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: ["value"],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [
                {
                  name: "Array<CommentTagLength.Type>",
                  tags: [],
                },
              ],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: null,
            jsDocTags: [],
          },
        ],
        jsDocTags: [],
        index: 0,
        validated: false,
        recursive: false,
        nullables: [false],
      },
      {
        name: "CommentTagLength.Type",
        properties: [
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: ["fixed"],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "string",
                  tags: [
                    [
                      {
                        target: "string",
                        name: "MinLength<5>",
                        kind: "minLength",
                        value: 5,
                        validate: "5 <= $input.length",
                        exclusive: true,
                      },
                      {
                        target: "string",
                        name: "MaxLength<5>",
                        kind: "maxLength",
                        value: 5,
                        validate: "$input.length <= 5",
                        exclusive: true,
                      },
                    ],
                  ],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: null,
            jsDocTags: [
              {
                name: "length",
                text: [
                  {
                    text: "5",
                    kind: "text",
                  },
                ],
              },
            ],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: ["minimum"],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "string",
                  tags: [
                    [
                      {
                        target: "string",
                        name: "MinLength<3>",
                        kind: "minLength",
                        value: 3,
                        validate: "3 <= $input.length",
                        exclusive: true,
                      },
                    ],
                  ],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: null,
            jsDocTags: [
              {
                name: "minLength",
                text: [
                  {
                    text: "3",
                    kind: "text",
                  },
                ],
              },
            ],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: ["maximum"],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "string",
                  tags: [
                    [
                      {
                        target: "string",
                        name: "MaxLength<7>",
                        kind: "maxLength",
                        value: 7,
                        validate: "$input.length <= 7",
                        exclusive: true,
                      },
                    ],
                  ],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: null,
            jsDocTags: [
              {
                name: "maxLength",
                text: [
                  {
                    text: "7",
                    kind: "text",
                  },
                ],
              },
            ],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: ["minimum_and_maximum"],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "string",
                  tags: [
                    [
                      {
                        target: "string",
                        name: "MinLength<3>",
                        kind: "minLength",
                        value: 3,
                        validate: "3 <= $input.length",
                        exclusive: true,
                      },
                      {
                        target: "string",
                        name: "MaxLength<7>",
                        kind: "maxLength",
                        value: 7,
                        validate: "$input.length <= 7",
                        exclusive: true,
                      },
                    ],
                  ],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: null,
            jsDocTags: [
              {
                name: "minLength",
                text: [
                  {
                    text: "3",
                    kind: "text",
                  },
                ],
              },
              {
                name: "maxLength",
                text: [
                  {
                    text: "7",
                    kind: "text",
                  },
                ],
              },
            ],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: ["equal"],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [
                {
                  type: "string",
                  tags: [
                    [
                      {
                        target: "string",
                        name: "MinLength<10>",
                        kind: "minLength",
                        value: 10,
                        validate: "10 <= $input.length",
                        exclusive: true,
                      },
                      {
                        target: "string",
                        name: "MaxLength<19>",
                        kind: "maxLength",
                        value: 19,
                        validate: "$input.length <= 19",
                        exclusive: true,
                      },
                    ],
                  ],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            description: null,
            jsDocTags: [
              {
                name: "minLength",
                text: [
                  {
                    text: "10",
                    kind: "text",
                  },
                ],
              },
              {
                name: "maxLength",
                text: [
                  {
                    text: "19",
                    kind: "text",
                  },
                ],
              },
            ],
          },
        ],
        jsDocTags: [],
        index: 1,
        validated: false,
        recursive: false,
        nullables: [false],
      },
    ],
    aliases: [],
    arrays: [
      {
        name: "Array<CommentTagLength.Type>",
        value: {
          any: false,
          required: true,
          optional: false,
          nullable: false,
          functional: false,
          atomics: [],
          constants: [],
          templates: [],
          escaped: null,
          rest: null,
          arrays: [],
          tuples: [],
          objects: ["CommentTagLength.Type"],
          aliases: [],
          natives: [],
          sets: [],
          maps: [],
        },
        nullables: [false],
        recursive: false,
        index: null,
      },
    ],
    tuples: [],
  },
});
