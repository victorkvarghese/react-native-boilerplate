module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 0,
      },
    },
  ],
};
