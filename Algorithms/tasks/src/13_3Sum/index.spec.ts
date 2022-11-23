import {threeSum} from './index';
import {expectInAnyOrder} from "../_utils/expectInAnyOrder";

let startAt;
describe('threeSum', () => {
	beforeAll(() => {
		startAt = +new Date();
	})
	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('time(ss:ms):', time.getSeconds(), ':', time.getMilliseconds())
	})

	test('[-1,0,1,2,-1,-4]', () => {
		const result = threeSum([-1,0,1,2,-1,-4]);
		const answer = [[-1,0,1], [-1,-1,2]];
		expectInAnyOrder(answer, result);
	})

	test('[]', () => {
		expect(threeSum([])).toStrictEqual([]);
	})

	test('[0]', () => {
		expect(threeSum([0])).toStrictEqual([]);
	})

	test('[0,0]', () => {
		expect(threeSum([0,0])).toStrictEqual([]);
	})

	test('[0,0,0]', () => {
		expect(threeSum([0,0,0])).toStrictEqual([[0,0,0]]);
	})

	test('[0,0,0,0]', () => {
		expect(threeSum([0,0,0,0])).toStrictEqual([[0,0,0]]);
	})

	test('[1, 2, 3, -1, -2, -3]', () => {
		const result = threeSum([1, 2, 3, -1, -2, -3]);
		const answer = [[-3, 1, 2], [-2, -1, 3]];
		expectInAnyOrder(answer, result);
	})
})