/**
 * @file Lint Staged Configuration
 * @see https://github.com/okonet/lint-staged
 */

/* eslint-disable import/no-unused-modules */
const runPrettier = 'prettier --cache --cache-strategy metadata --write'
const runEslint = 'eslint --cache --fix --max-warnings=-1'

const config = {
	'*.{cjs,mjs,js,jsx,ts,tsx}': [runEslint, runPrettier],
	'*.{json,html,css,scss,yaml,yml,md}': [runPrettier],
}

module.exports = config
