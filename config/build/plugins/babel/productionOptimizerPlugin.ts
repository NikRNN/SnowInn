//Здесь только Babel Visitor, ничего про vite не знает
import type {PluginObj, NodePath, } from "@babel/core";
import {types as t} from "@babel/core";

export interface ProductionOptimizerOptions {
    removeProps?: string[];
    removeConsole?: string[];
}

export default function productionOptimizerPlugin(): PluginObj {

    let removableProps = new Set<string>();
    let removableConsole = new Set<string>();

    return {
        name: "production-optimizer",

        pre(state) {
            const options = state.opts as ProductionOptimizerOptions;

            removableProps = new Set(options.removeProps ?? []);
            removableConsole = new Set(options.removeConsole ?? []);
        },

        visitor: {
            JSXOpeningElement(
                path: NodePath<t.JSXOpeningElement>,
                
            ) {

                path.node.attributes =
            path.node.attributes.filter((attribute) => {
                if (!t.isJSXAttribute(attribute)) {
                    return true;
                }

                return !removableProps.has(
                    attribute.name.name.toString(),
                );
            });
            },

            CallExpression(path) {
               

                const callee = path.node.callee;

                if (!t.isMemberExpression(callee)) {
                    return;
                }

                if (!t.isIdentifier(callee.object, { name: "console" })) {
                    return;
                }

                if (!t.isIdentifier(callee.property)) {
                    return;
                }

                if (!removableConsole.has(callee.property.name)) {
                    return;
                }

                if (path.parentPath.isExpressionStatement()) {
                    path.parentPath.remove();
                }
            },
        },
    };
}