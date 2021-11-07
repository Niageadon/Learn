import {isPalindrome} from './index';

describe('isPalindrome', () => {
	test('121', () => {
		expect(isPalindrome(121)).toBe(true);
	});

	test('-121', () => {
		expect(isPalindrome(-121)).toBe(false);
	});

	test('10', () => {
		expect(isPalindrome(10)).toBe(false);
	});

	test('-101', () => {
		expect(isPalindrome(-101)).toBe(false);
	});
})

