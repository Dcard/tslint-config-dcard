var path = require('path');

module.exports = {
  extends: [
    'tslint:recommended',
    'tslint-eslint-rules',
    'tslint-react',
    'tslint-consistent-codestyle',
    'rxjs-tslint-rules'
  ],
  rulesDirectory: [
    path.dirname(require.resolve('tslint-microsoft-contrib'))
  ],
  rules: {
    'quotemark': [true, 'single', 'avoid-escape', 'jsx-single'],
    'ordered-imports': false,
    'object-literal-sort-keys': false,
    'no-unused-variable': true,
    'trailing-comma': [true, {
      'multiline': 'never',
      'singleline': 'never'
    }],
    'indent': [true, 'spaces', 2],
    'no-empty-interface': false,
    'jsx-alignment': false,
    'jsx-curly-spacing': [true, 'never'],
    'jsx-no-multiline-js': false,
    'jsx-no-lambda': true,
    'jsx-no-string-ref': true,
    'jsx-no-bind': true,
    'jsx-self-close': true,
    'jsx-wrap-multiline': true,
    'no-unnecessary-else': true,
    'no-return-undefined': true,
    'no-static-this': true,
    'prefer-const-enum': true,
    'insecure-random': true,
    'no-constant-condition': true,
    'no-control-regex': true,
    'no-cookies': true,
    'no-delete-expression': true,
    'no-disable-auto-sanitization': true,
    'no-document-domain': true,
    'no-document-write': true,
    'no-duplicate-case': true,
    'no-empty-line-after-opening-brace': true,
    'no-exec-script': true,
    'no-for-in': true,
    'no-function-constructor-with-string-args': true,
    'no-inner-html': true,
    'no-invalid-regexp': true,
    'no-regex-spaces': true,
    'no-reserved-keywords': true,
    'no-string-based-set-immediate': true,
    'no-string-based-set-interval': true,
    'no-string-based-set-timeout': true,
    'no-unnecessary-bind': true,
    'no-unnecessary-class': true,
    'no-unnecessary-field-initialization': true,
    'no-unnecessary-local-variable': true,
    'no-unnecessary-override': true,
    'no-useless-files': true,
    'no-with-statement': true,
    'non-literal-require': true,
    'possible-timing-attack': true,
    'prefer-array-literal': true,
    'promise-must-complete': true,
    'react-a11y-anchors': {
      severity: 'warning'
    },
    'react-a11y-aria-unsupported-elements': {
      severity: 'warning'
    },
    'react-a11y-event-has-role': {
      severity: 'warning'
    },
    'react-a11y-image-button-has-alt': {
      severity: 'warning'
    },
    'react-a11y-img-has-alt': {
      severity: 'warning'
    },
    'react-a11y-lang': {
      severity: 'warning'
    },
    'react-a11y-meta': {
      severity: 'warning'
    },
    'react-a11y-props': {
      severity: 'warning'
    },
    'react-a11y-proptypes': {
      severity: 'warning'
    },
    'react-a11y-role-has-required-aria-props': {
      severity: 'warning'
    },
    'react-a11y-role-supports-aria-props': {
      severity: 'warning'
    },
    'react-a11y-role': {
      severity: 'warning'
    },
    'react-a11y-tabindex-no-positive': {
      severity: 'warning'
    },
    'react-a11y-titles': {
      severity: 'warning'
    },
    'react-anchor-blank-noopener': {
      severity: 'warning'
    },
    'react-iframe-missing-sandbox': {
      severity: 'warning'
    },
    'react-no-dangerous-html': true,
    'react-this-binding-issue': true,
    'react-unused-props-and-state': true,
    'underscore-consistent-invocation': true,
    'use-named-parameter': true,
    'valid-typeof': true,
    'no-bitwise': false,
    'no-shadowed-variable': false,
    'rxjs-no-do': true,
    'rxjs-no-operator': true,
    'rxjs-no-add': true,
    'rxjs-no-patched': true,
    'rxjs-no-wholesale': true
  }
};
