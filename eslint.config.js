import js from '@eslint/js';
import globals from 'globals';
import hooks from 'eslint-plugin-react-hooks';

export default [
  { ignores: ['dist/**', 'admin/**', 'node_modules/**'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node }, parserOptions: { ecmaFeatures: { jsx: true } } },
    plugins: { 'react-hooks': hooks },
    rules: { ...js.configs.recommended.rules, 'react-hooks/rules-of-hooks': 'error', 'react-hooks/exhaustive-deps': 'error', 'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z]' }] },
  },
];
