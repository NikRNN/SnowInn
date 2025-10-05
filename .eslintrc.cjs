// module.exports = {
//     root: true,
//     parser: "@typescript-eslint/parser", // TypeScript
//     parserOptions: {
//         ecmaVersion: "latest",
//         sourceType: "module",
//         ecmaFeatures: {
//             jsx: true, // поддержка JSX
//         },
//     },
//     env: {
//         browser: true,
//         es2021: true,
//     },
//     plugins: [
//         "react",
//         "react-hooks",
//         "jsx-a11y",
//         "import",
//         "i18next",
//         "@typescript-eslint",
//     ],
//     extends: [
//         "airbnb", // стиль Airbnb
//         "airbnb/hooks", // для React Hooks
//         "plugin:@typescript-eslint/recommended", // базовые правила TypeScript
//         "plugin:react/recommended", // рекомендации React
//         "plugin:jsx-a11y/recommended", // доступность
//         "plugin:i18next/recommended",
//     ],
//     settings: {
//         react: {
//             version: "detect", // автоматически определяет версию React
//         },
//         "import/resolver": {
//             typescript: {
//                 alwaysTryTypes: true,
//             },
//         },
//     },
//     rules: {
//         "react/react-in-jsx-scope": "off", // для React 17+
//         "react/jsx-filename-extension": [
//             2,
//             { extensions: [".tsx", ".jsx", ".js"] },
//         ],
//         "i18next/no-literal-string": ["error", { markupOnly: true }], // ошибка для текста без перевода
//         quotes: ["error", "double"],
//         "import/extensions": [
//             "error",
//             "ignorePackages",
//             {
//                 js: "never",
//                 jsx: "never",
//                 ts: "never",
//                 tsx: "never",
//             },
//         ],
//         "import/prefer-default-export": "off",
//         "react/jsx-indent": ["error", 4],
//         "react/jsx-indent-props": ["error", 4],
//         indent: [2, 4],
//         "max-len": ["error", { code: 120, ignoreComments: true }],
//         "no-unused-vars": "off",
//         "@typescript-eslint/no-unused-vars": ["warn"],
//         "react/require-default-props": "off",
//         "react/jsx-props-no-spreading": "warn",
//         "react/function-component-definition": "warn",
//         "no-underscore-dangle": ["error", {
//             allow: ["__IS_DEV", "__dirname", "__filename"],
//         }],
//         "import/no-extraneous-dependencies": ["error", {
//             devDependencies: true, // разрешаем все dev зависимости
//             optionalDependencies: false,
//             peerDependencies: false,
//         }],
//     },
// };

module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
        project: "./tsconfig.json", // ← важно для TypeScript
    },
    env: {
        browser: true,
        es2021: true,
    },
    plugins: [
        "react",
        "react-hooks",
        "jsx-a11y",
        "import",
        "i18next",
        "@typescript-eslint",
    ],
    extends: [
        "airbnb",
        "airbnb/hooks",
        "airbnb-typescript", // ← добавляем
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:i18next/recommended",
    ],
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: "./tsconfig.json",
            },
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [
            "error",
            { extensions: [".tsx", ".jsx", '.js'] },
        ],
        "i18next/no-literal-string": ["error", { markupOnly: true }],
        quotes: ["error", "double"],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "import/prefer-default-export": "off",
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        indent: ["error", 4],
        "max-len": ["error", {
            code: 120,
            ignoreComments: true,
            ignoreUrls: true,
        }],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error", {
            argsIgnorePattern: "^_",
        }],
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "warn",
        "react/prop-types": "off", 
        "no-underscore-dangle": ["error", {
            allow: ["__IS_DEV", "__dirname", "__filename"],
        }],
        "import/no-extraneous-dependencies": ["error", {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false,
        }],
    },
    overrides: [
        {
            files: ["**/*.test.{ts,tsx}", "**/*.spec.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
            },
        },
    ],
};
