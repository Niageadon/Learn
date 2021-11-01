import {myAtoi} from './index';

describe('myAtoi', () => {
	test('   -42', () => {
		expect(myAtoi("   -42")).toBe(-42);
	});

	test('4193 with words', () => {
		expect(myAtoi("4193 with words")).toBe(4193);
	});

	test('words and 987', () => {
		expect(myAtoi("words and 987")).toBe(0);
	});

	test("-+12", () => {
		expect(myAtoi("-+12")).toBe(0);
	});

	test("+-12", () => {
		expect(myAtoi("+-12")).toBe(0);
	});

	test("21474836460", () => {
		expect(myAtoi("21474836460")).toBe(2147483647);
	});

	test("42", () => {
		expect(myAtoi("42")).toBe(42);
	});

	test("   +0 123", () => {
		expect(myAtoi("   +0 123")).toBe(0);
	});

	test("00000-42a1234", () => {
		expect(myAtoi("00000-42a1234")).toBe(0);
	});
})

