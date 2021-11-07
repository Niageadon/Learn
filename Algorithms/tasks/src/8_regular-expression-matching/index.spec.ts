import {isMatch} from './index';

describe('isMatch', () => {
	test('aa,  a', () => {
		expect(isMatch('aa', 'a')).toBe(false);
	});

	test('aa,  a*', () => {
		expect(isMatch('aa', 'a*')).toBe(true);
	});

	test('ab,  .*', () => {
		expect(isMatch('ab', '.*')).toBe(true);
	});

	test('bibaboba,  .*', () => {
		expect(isMatch('bibaboba', '.*')).toBe(true);
	});

	test('aab,  c*a*b', () => {
		expect(isMatch('aab', 'c*a*b')).toBe(true);
	});

	test('mississippi,  mis*is*p*.', () => {
		expect(isMatch('mississippi', 'mis*is*p*.')).toBe(false);
	});

	test('mississippi, mis*is*ip*.', () => {
		expect(isMatch('mississippi', 'mis*is*ip*.')).toBe(true);
	});

	test('ab, .*c', () => {
		expect(isMatch('ab', '.*c')).toBe(false);
	});

	test('aaa, ab*a', () => {
		expect(isMatch('aaa', 'ab*a')).toBe(false);
	});
})

