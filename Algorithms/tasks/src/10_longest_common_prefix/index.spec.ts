import {longestCommonPrefix} from './index';

let startAt;
describe('longestCommonPrefix', () => {
	beforeAll(() => {
		startAt = +new Date();
	})
	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('time(ss:ms):', time.getSeconds(), ':', time.getMilliseconds())
	})

	test('["flower","flow","flight"]', () => {
		expect(longestCommonPrefix(["flower","flow","flight"])).toBe('fl');
	});

	test('["dog","racecar","car"]', () => {
		expect(longestCommonPrefix(["dog","racecar","car"])).toBe('');
	});

	test('[""]', () => {
		expect(longestCommonPrefix([""])).toBe('');
	});

	test('["",""]', () => {
		expect(longestCommonPrefix(["",""])).toBe('');
	});

	test('["flower","flower","flower","flower"]', () => {
		expect(longestCommonPrefix(["flower","flower","flower","flower"])).toBe('flower');
	});

	test('["c","acc","ccc"]', () => {
		expect(longestCommonPrefix(["c","acc","ccc"])).toBe('');
	});
})

