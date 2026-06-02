// eslint.config.mjs
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import i18next from "eslint-plugin-i18next";
import tseslint from "typescript-eslint";
import storybookPlugin from "eslint-plugin-storybook";
import jsonc from "eslint-plugin-jsonc";
import petElsintPlugin from "eslint-plugin-for-pet-projects"
import { fixupConfigRules } from "@eslint/compat";

export default [
    // ===== IGNORES =====
    {
        ignores: [
            "node_modules/**",
            "dist/**",
            "build/**",
            "json-server/**",
            "favicon/site.webmanifest",
            "package.json",           // ← добавить
            "package-lock.json",  
        ],
    },

    // ===== ОСНОВНЫЕ ФАЙЛЫ =====
    {
        files: ["src/**/*.{js,jsx,ts,tsx}", "config/**/*.{js,jsx,ts,tsx}"],
        ...js.configs.recommended,
    },

    // ===== TYPESCRIPT =====
    ...tseslint.configs.recommended,

    // ===== REACT =====
    react.configs.flat.recommended,

    // ===== JSX A11Y =====
    jsxA11y.flatConfigs.recommended,

    // ===== IMPORTS =====
    importPlugin.flatConfigs.recommended,

    // ===== REACT HOOKS =====
    {
        plugins: { "react-hooks": reactHooks },
        rules: {
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
        },
    },

    // ===== i18next =====
    {
        plugins: { i18next },
        rules: {
            "i18next/no-literal-string": ["error", { markupOnly: true }],
        },
    },

    // ===== STORYBOOK =====
    ...fixupConfigRules(storybookPlugin.configs["flat/recommended"])
        .map(config => ({
            ...config,
            files: ["**/*.stories.@(ts|tsx|js|jsx)"],
        })),

    // ===== JSON =====
    {
        files: ["**/*.json"],
        languageOptions: { parser: jsonc.parser },
        plugins: { jsonc },
        rules: {
            "jsonc/quotes": ["error", "double"],
            "jsonc/quote-props": ["error", "always"],
            "jsonc/comma-dangle": ["error", "never"],
            "jsonc/no-dupe-keys": "error",
            "jsonc/no-octal-escape": "error",
            "jsonc/no-sparse-arrays": "error",
            "jsonc/no-useless-escape": "error",
        },
    },

    // ===== JSONC / JSON5 =====
    {
        files: ["**/*.jsonc", "**/*.json5", "tsconfig*.json"],
        languageOptions: { parser: jsonc.parser },
        plugins: { jsonc },
    },
    

    // ===== ОБЩИЕ ПРАВИЛА =====
    {
        plugins: {
            "@typescript-eslint": tseslint.plugin,
            "for-pet-projects": petElsintPlugin
        },

        settings: {
            react: { version: "detect" },
            "import/resolver": {
                typescript: { alwaysTryTypes: true },
                node: { extensions: [".js", ".jsx", ".ts", ".tsx", ".json"] },
            },
        },

        rules: {
            //my custom rules
            "for-pet-projects/no-var": "error",
            "for-pet-projects/path-checker": "error",
            // React
            "react/react-in-jsx-scope": "off",
            "react/jsx-filename-extension": [2, { extensions: [".tsx", ".jsx", ".js"] }],
            "react/display-name": "off",
            "react/jsx-indent": ["error", 4],
            "react/jsx-indent-props": ["error", 4],
            "react/require-default-props": "off",
            "react/jsx-props-no-spreading": "warn",
            "react/function-component-definition": "warn",

            // JSX A11y
            "jsx-a11y/no-static-element-interactions": "off",
            "jsx-a11y/click-events-have-key-events": "off",
            "jsx-a11y/no-autofocus": "off",

            // Imports
            "import/extensions": ["error", "ignorePackages", {
                js: "never", jsx: "never", ts: "never", tsx: "never",
            }],
            "import/prefer-default-export": "off",
            "import/no-extraneous-dependencies": ["warn", {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false,
            }],

            // Common
            "quotes": ["error", "double"],
            "indent": [2, 4],
            "max-len": ["warn", { code: 250, ignoreComments: true }],
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": ["warn"],
            "no-underscore-dangle": ["error", {
                allow: ["__IS_DEV", "__dirname", "__filename"],
            }],
            "no-param-reassign": "off",
            "linebreak-style": "off",
        },
    },
];

