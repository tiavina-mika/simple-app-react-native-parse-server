module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ["./tsconfig.json"],
    },
    rules: {
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
      "import/no-mutable-exports": 0,
      "no-labels": 0,
      "no-restricted-syntax": 0,
      "no-console": "off",
    },
    plugins: ["@typescript-eslint", "prettier"],
    extends: [
      "airbnb-typescript/base",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "prettier/@typescript-eslint",
    ],
  };