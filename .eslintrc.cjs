module.exports = {
    root: true,
    parser: "@typescript-eslint/parser", // TypeScript
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true, // поддержка JSX
        },
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
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended",
        "plugin:storybook/recommended",
        "plugin:storybook/recommended",
        "plugin:storybook/recommended",
        "plugin:storybook/recommended",
        "plugin:storybook/recommended",
        "plugin:react-hooks/recommended",
    ],
    settings: {
        react: {
            version: "detect", // автоматически определяет версию React
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    rules: {
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "react/react-in-jsx-scope": "off", // для React 17+
        "react/jsx-filename-extension": [
            2,
            { extensions: [".tsx", ".jsx", ".js"] },
        ],
        "react/display-name": "warn",
        "i18next/no-literal-string": ["error", { markupOnly: true }], // ошибка для текста без перевода
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
        indent: [2, 4],
        "max-len": ["warn", { code: 250, ignoreComments: true }],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn"],
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "warn",
        "no-underscore-dangle": ["error", {
            allow: ["__IS_DEV", "__dirname", "__filename"],
        }],
        "import/no-extraneous-dependencies": ["warn", {
            devDependencies: true, // разрешаем все dev зависимости
            optionalDependencies: false,
            peerDependencies: false,
        }],
        "no-param-reassign": "off",
    },
};
