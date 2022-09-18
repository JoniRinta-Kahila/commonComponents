module.exports = {
  extends: ['stylelint-config-standard-scss'],
  ignoreFiles: ['src/**/*.snap', '**/*.ts', '**/*.tsx', '**/*.png'],
  rules: {
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'string-quotes': 'single',
  },
};
