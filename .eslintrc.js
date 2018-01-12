module.exports ={
    'extends': [
        // 'eslint'
        // 'eslint:recommended',
        'standard'
    ],
    'parserOptions': {
        // ECMAScript version: 3—8 (or 2015—2017), defaults to 5
        'ecmaVersion': 8,
        // Treat source files as ECMAScript modules, defaults to 'script'
        'sourceType': 'module',
        'ecmaFeatures': {
            // Enable object rest/spread properties: {...a, ...b}
            'experimentalObjectRestSpread': true,
            // Enable JSX
            'jsx': true
        }
    },
    // If you’re using Flow or experimental ECMAScript features
    // not supported by ESLint, enable babel-eslint parser
    'parser': 'babel-eslint',
    // Predefined sets of global variables
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
        'amd': true,
        'mocha': true,
        'jasmine': true,
        'jest': true,
        'phantomjs': true
    },
    'globals': {
        'console': false,
        'Prism': false
    },
    'rules': {
        'indent': [ 'warn', 4 ],
        'semi': [ 'error', 'always' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'object-curly-spacing': [ 'error', 'always' ],
        'space-in-parens': [ 'error', 'always' ],
        'comma-style': [ 'error', 'last' ],
        'comma-dangle': [ 'error', 'only-multiline' ],
        'template-curly-spacing': [ 'error', 'always' ],
        'brace-style': [ 'error', 'stroustrup', { 'allowSingleLine': true } ],
        'no-trailing-spaces': [ 'error', { 'skipBlankLines': true } ],
        'no-new': [ 'off' ]
    }
};
