import {intToRoman} from './index';

let startAt;
describe('intToRoman', () => {
	beforeAll(() => {
		startAt = +new Date();
	})
	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('time(ss:ms):', time.getSeconds(), ':', time.getMilliseconds())
	})

	test('3', () => {
		expect(intToRoman(3)).toBe('III');
	})

	test('58', () => {
		expect(intToRoman(58)).toBe('LVIII');
	})

	test('1994', () => {
		expect(intToRoman(1994)).toBe('MCMXCIV');
	})

	test('20', () => {
		expect(intToRoman(20)).toBe('XX');
	})

	test('45', () => {
		expect(intToRoman(45)).toBe('XLV'); // kakogo hera ne VL
	})

	test('21', () => {
		expect(intToRoman(21)).toBe('XXI'); // kakogo hera ne VL
	})
})

