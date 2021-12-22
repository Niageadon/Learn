import {lengthOfLongestSubstring} from './index';

describe('lengthOfLongestSubstring', () => {
	test('abcabcbb', () => {
		expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
	});

	test('', () => {
		expect(lengthOfLongestSubstring('')).toBe(0);
	});

	test('pwwkew', () => {
		expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
	});

	test(' ', () => {
		expect(lengthOfLongestSubstring(' ')).toBe(1);
	});

	test('dvdf', () => {
		expect(lengthOfLongestSubstring('dvdf')).toBe(3);
	});
})

