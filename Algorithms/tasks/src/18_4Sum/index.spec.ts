import {fourSum} from './index';
import {expectInAnyOrderNested} from "../_utils/expectInAnyOrder";

let startAt;
describe('threeSum', () => {
	beforeAll(() => {
		startAt = +new Date();
	})
	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('time(ss:ms):', time.getSeconds(), ':', time.getMilliseconds())
	})

	test('[1,0,-1,0,-2,2]', () => {
		const result = fourSum([1,0,-1,0,-2,2], 0);
		const answer = [[-2,-1,1,2], [-2,0,0,2], [-1,0,0,1]];
		expectInAnyOrderNested(answer, result);
	})

	test('[2,2,2,2,2]', () => {
		const result = fourSum([2,2,2,2,2], 8);
		const answer = [[2,2,2,2]];
		expectInAnyOrderNested(answer, result);
	})

	test('[0,0,0]', () => {
		const result = fourSum([0,0,0], 0);
		const answer = [];
		expect(result).toStrictEqual(answer);
		//expectInAnyOrderNested(answer, result);
	})

})