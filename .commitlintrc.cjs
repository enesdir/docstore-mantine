/**
 * @file Commitlint Configuration
 * @see https://commitlint.js.org/#/guides-local-setup
 * @see https://commitlint.js.org/#/reference-configuration
 */

/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-empty': [2, 'never'],
		'type-case': [2, 'always', 'lower-case'],
		'subject-empty': [2, 'never'],
		'body-empty': [2, 'always'],
		'footer-empty': [2, 'always'],
	},
}
