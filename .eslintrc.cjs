/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['@typescript-eslint', 'eslint-plugin-unicorn'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    'no-console': 'warn',

    /**
     * This rule allows us to add TODOs, but ONLY if we can justify
     * it with a "will fix when" condition.
     *
     * Read more about how to specify such conditions here
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md
     */
    'unicorn/expiring-todo-comments': [
      'warn',
      {
        allowWarningComments: false,
      },
    ],
  },
  ignorePatterns: [".eslintrc.cjs"]
};
