import {isMatch} from './index';

describe('isMatch', () => {
	test('aa,  a', () => {
		expect(isMatch('aa', 'a')).toBe(false);
	});

	test('aa,  a*', () => {
		expect(isMatch('aa', 'a*')).toBe(true);
	});

	test('bbbbba,  .*a*a', () => {
		expect(isMatch('bbbbba', '.*a*a')).toBe(true);
	});

	test('a,  ab*', () => {
		expect(isMatch('a', 'ab*')).toBe(true);
	});

	test('aaa,  aaaa', () => {
		expect(isMatch('aaa', 'aaaa')).toBe(false);
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

	test('paab,  p*c*a*b', () => {
		expect(isMatch('paab', 'p*c*a*b')).toBe(true);
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

	test('bobobom, .*bo*m', () => {
		expect(isMatch('bobobom', '.*bo*m')).toBe(true);
	});

	test('aaa, ab*a', () => {
		expect(isMatch('aaa', 'ab*a')).toBe(false);
	});

	test('aaa, a*a', () => {
		expect(isMatch('aaa', 'a*a')).toBe(true);
	});

	test('aaaaaab, a*ab', () => {
		expect(isMatch('aaaaaab', 'a*ab')).toBe(true);
	});

	test('accbaccbaccb, accb.*accb', () => {
		expect(isMatch('accbaccbaccb', 'accb.*accb')).toBe(true);
	});

	test('aaa, ab*a*c*a', () => {
		expect(isMatch('aaa', 'ab*a*c*a')).toBe(true);
	});
})

