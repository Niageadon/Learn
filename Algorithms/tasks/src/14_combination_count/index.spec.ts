import {getCombinations} from './index';

let startAt;
describe('сс', () => {
	beforeAll(() => {
		startAt = +new Date();
	})
	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('time(ss:ms):', time.getSeconds(), ':', time.getMilliseconds())
	})

	test('[1, 2]', () => {
		expect(getCombinations([1, 2])).toStrictEqual([[1,2], [2,1]]);
	})

	test('[1, 2, 3]', () => {
		expect(getCombinations([1, 2, 3])).toHaveLength(6);
	})
	test('[1, 2, 3, 4]', () => {
		expect(getCombinations([1, 2, 3, 4])).toHaveLength(24);
	})
	test('[1, 2, 3, 4, 5]', () => {
		expect(getCombinations([1, 2, 3, 4, 5])).toHaveLength(120);
	})
	test('[, 2, 3, 4, 5, 6, 7, 8]', () => {
		expect(getCombinations([1, 2, 3, 4, 5, 6, 7, 8])).toHaveLength(40320);
	})
	test('[1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
		expect(getCombinations([1, 2, 3, 4, 5, 6, 7, 8, 9])).toHaveLength(362880);
	})
	test('[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
		expect(getCombinations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toHaveLength(3628800);
	})
	test('[1, 2, 3]', () => {
		expect(getCombinations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toHaveLength(39916800);
	})
})


