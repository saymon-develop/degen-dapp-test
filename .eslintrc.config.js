const typeScriptEsLintPlugin = require("@typescript-eslint/eslint-plugin")
const esLintConfigPrettier = require("eslint-config-prettier")
const reactPlugin = require("eslint-plugin-react")
const reactHooksPlugin = require("eslint-plugin-react-hooks")
const { fixupPluginRules } = require("@eslint/compat")
const { FlatCompat } = require("@eslint/eslintrc")

// Translate ESLintRC-style configs into flat configs.
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: typeScriptEsLintPlugin.configs["recommended"],
})

module.exports = [
  // ESLint recommended flat config.
  // Flat config for parsing TypeScript files. Includes rules for TypeScript.
  ...compat.config({
    env: { node: true, browser: true },
    extends: ["plugin:@typescript-eslint/recommended", "plugin:react/recommended", "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["prettier", "@typescript-eslint", "jsx-a11y", "promise", "simple-import-sort"],
    rules: {
      "prettier/prettier": [
        "warn",
        {
          vueIndentScriptAndStyle: false,
          printWidth: 100,
          trailingComma: "all",
          endOfLine: "auto",
          tabWidth: 2,
          semi: false,
          singleQuote: false,
          jsxSingleQuote: false,
          bracketSpacing: true,
          bracketSameLine: false,
          arrowParens: "avoid",
        },
      ],

      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/prefer-as-const": "warn",
      "@typescript-eslint/no-empty-function": "off",

      "jsx-a11y/accessible-emoji": "off",
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/no-autofocus": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/label-has-associated-control": "off",

      "promise/no-return-wrap": "error",
      "promise/no-nesting": "warn",
      "promise/param-names": "warn",
      "promise/catch-or-return": ["warn", { allowThen: true, allowFinally: true }],
      "promise/no-callback-in-promise": "warn",

      "arrow-parens": 0,
      "no-debugger": 1,
      "no-return-await": 1,
      "object-curly-spacing": ["error", "always"],
      "no-var": "error",
      "comma-dangle": [1, "always-multiline"],
      "linebreak-style": ["error", "unix"],
      "generator-star-spacing": 0,
      "no-tabs": 2,
      "max-len": [
        1,
        {
          code: 100,
          comments: 200,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      quotes: [
        2,
        "double",
        {
          avoidEscape: true,
        },
      ],
      "no-multiple-empty-lines": [
        2,
        {
          max: 1,
          maxEOF: 0,
          maxBOF: 0,
        },
      ],
      semi: [2, "never"],
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      "no-empty": "warn",
      "no-empty-pattern": "warn",
      "no-undef": "warn",
      "no-useless-catch": "warn",
      "no-useless-escape": "off",
      "no-case-declarations": "warn",
      "no-prototype-builtins": "off",
      "no-unsafe-optional-chaining": "warn",
      "no-async-promise-executor": "warn",
      "no-unused-vars": "off",
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["ethers"],
              message:
                "Please use @ethersproject/* instead of ethers, as ethers is in dev dependencies.",
            },
          ],
        },
      ],
      "no-empty-function": "off",
    },
  }),

  // Flat config for turning off all rules that are unnecessary or might conflict with Prettier.
  esLintConfigPrettier,

  // Flat config for ESLint rules.
  {
    plugins: {
      react: reactPlugin,
      "react-hooks": fixupPluginRules(reactHooksPlugin),
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
]
