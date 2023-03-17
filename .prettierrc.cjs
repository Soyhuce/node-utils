module.exports = {
  singleQuote: true,
  semi: false,
  printWidth: 100,
  tabWidth: 2,
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: false,
  jsxSingleQuote: true,
  arrowParens: 'always',
  overrides: [
    {
      files: ['*.svg'],
      options: {
        parser: 'html'
      }
    }
  ]
}
