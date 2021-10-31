import {convert} from './index';

describe('lengthOfLongestSubstring', () => {
	test('PAYPALISHIRING, 3', () => {
		expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
	});

	test('PAYPALISHIRING, 4', () => {
		expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
	});

	test('a, 1', () => {
		expect(convert('a', 1)).toBe('a');
	});

	test('ab, 1', () => {
		expect(convert('ab', 1)).toBe('ab');
	});
})

