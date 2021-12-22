import {romanToInt} from './index';

describe('isPalindrome', () => {
	test("III", () => {
		expect(romanToInt("III")).toBe(3);
	});

	test("LVIII", () => {
		expect(romanToInt("LVIII")).toBe(58);
	});

	test("MCMXCIV", () => {
		expect(romanToInt("MCMXCIV")).toBe(1994);
	});
})

