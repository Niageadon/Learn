import {threeSum} from './index';

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
		expect(threeSum([-1,0,1,2,-1,-4])).toStrictEqual([[-1,0,1], [-1,-1,2]]);
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

	test('[bobo]', () => {
		expect(threeSum([-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1])).toStrictEqual([[0,0,0]]);
	})
})