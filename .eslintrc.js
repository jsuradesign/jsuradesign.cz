module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    extends: [
        "airbnb-typescript",
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier",
        // "prettier/react",
        // "prettier/@typescript-eslint",
        "crockford"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parser: "@typescript-eslint/parser",
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                "no-undef": 0,
            }
        }
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            globalReturn: false
        },
        ecmaVersion: 2018,
        sourceType: "module",
        project: "./tsconfig.json",
    },
    ignorePatterns: ["node_modules", "build", "dist", "coverage", ".eslintrc.js"],
    plugins: ["@typescript-eslint", "react", "prettier", "import"],
    rules: {
        quotes: ["error", "double"],
        "import/no-extraneous-dependencies": "off",
        "one-var": "off",
        "eol-last": ["error", "unix"],
        "lines-between-class-members": "off",
        "@typescript-eslint/lines-between-class-members": "off",
        // "padding-line-between-statements": [
        //     "error",
        //     {
        //         blankLine: "always",
        //         prev: ["*"],
        //         next: ["return", "block", "block-like"],
        //     },
        // ],
        "no-multiple-empty-lines": ["error", { max: 1 }],
        "object-curly-spacing": [2, "never"],
        "comma-dangle": ["error", "never"],
        "lines-between-class-members": [
            "error",
            "always",
            { exceptAfterSingleLine: true },
        ],
        "max-classes-per-file": "off",
        "no-param-reassign": "off",
        "no-unused-expressions": "off",
        "no-plusplus": "off",
        "class-methods-use-this": "off",
        "no-underscore-dangle": ["error", { allowAfterThis: true }],
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": [
            "error",
            { devDependencies: true },
        ],
        "@typescript-eslint/no-unused-expressions": [
            "error",
            { allowShortCircuit: true },
        ],
        "@typescript-eslint/type-annotation-spacing": [
            "error",
            {
                before: false,
                after: false,
                overrides: { arrow: { before: true, after: true } },
            },
        ],
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-empty-interface": [
            "error",
            { allowSingleExtends: true },
        ],
        "@typescript-eslint/no-var-requires": "off",
        "react/destructuring-assignment": "off",
        "react/jsx-props-no-spreading": "off",
        "react/static-property-placement": "off",
        "react/prefer-stateless-function": "off",
        "react/no-danger": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "jsx-a11y/anchor-has-content": "off",
        "jsx-a11y/control-has-associated-label": "off",
        "react/no-array-index-key": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "no-nested-ternary": "off",
        "react/require-default-props": "off",
        "react/no-unused-prop-types": "warn",
        "react/prop-types": [2, { ignore: ["children"] }],
        "prefer-destructuring": ["error", { object: true, array: false }],
        "react/jsx-no-target-blank": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
