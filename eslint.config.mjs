import path from 'node:path';
import url from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';

export default [
    js.configs.recommended,
    ...( new FlatCompat( {
        baseDirectory: path.dirname( url.fileURLToPath( import.meta.url ) )
    } ).extends( 'eslint-config-standard' ) ),
    {
        rules: {
            indent: [ 'warn', 4 ],
            semi: [ 'error', 'always' ],
            'array-bracket-spacing': [ 'error', 'always' ],
            'object-curly-spacing': [ 'error', 'always' ],
            'space-in-parens': [ 'error', 'always' ],
            'comma-style': [ 'error', 'last' ],
            'comma-dangle': [ 'error', 'only-multiline' ],
            'template-curly-spacing': [ 'error', 'always' ],
            'brace-style': [ 'error', 'stroustrup', { allowSingleLine: true } ],
            'no-trailing-spaces': [ 'error', { skipBlankLines: true } ],
            'no-new': [ 'off' ],
            'computed-property-spacing': [ 'error', 'never' ]
        },
    },
    {
        ignores: [ '**/vendors/**', '**/dist/**' ]
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                ...globals.es5,
                ...globals.node,
                ...globals.amd,
                ...globals.jasmine,
                ...globals.jest,
                ...globals.phantomjs,
            }
        }
    }
];
