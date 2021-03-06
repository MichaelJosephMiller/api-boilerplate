module.exports = {
  'env': {
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 2019,
    'sourceType': 'module'
  },
  'plugins': [
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    'block-spacing': [
      'error',
      'always'
    ],
    'comma-spacing': [
      'error',
      { before: false, after: true }
    ],
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ]
  }
}
