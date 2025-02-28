import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { ValidateProgrammer } from "../ValidateProgrammer";
import { HttpHeadersProgrammer } from "./HttpHeadersProgrammer";

export namespace HttpValidateHeadersProgrammer {
  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string): ts.ArrowFunction =>
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter(
            "input",
            ts.factory.createTypeReferenceNode(
              HttpHeadersProgrammer.INPUT_TYPE,
            ),
          ),
        ],
        ts.factory.createTypeReferenceNode(
          `typia.IValidation<typia.Resolved<${
            name ?? TypeFactory.getFullName(project.checker)(type)
          }>>`,
        ),
        undefined,
        ts.factory.createBlock([
          StatementFactory.constant(
            "validate",
            ValidateProgrammer.write({
              ...project,
              options: {
                ...project.options,
                functional: false,
                numeric: true,
              },
            })(modulo)(false)(type, name),
          ),
          StatementFactory.constant(
            "headers",
            HttpHeadersProgrammer.write({
              ...project,
              options: {
                ...project.options,
                functional: false,
                numeric: false,
              },
            })(modulo)(type, name),
          ),
          StatementFactory.constant(
            "output",
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("headers"),
              undefined,
              [ts.factory.createIdentifier("input")],
            ),
          ),
          ts.factory.createReturnStatement(
            ts.factory.createAsExpression(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("validate"),
                undefined,
                [ts.factory.createIdentifier("output")],
              ),
              ts.factory.createTypeReferenceNode("any"),
            ),
          ),
        ]),
      );
}
