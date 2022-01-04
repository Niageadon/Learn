import {maxArea} from './index';

let startAt;
describe('maxArea', () => {
	beforeAll(() => {
		startAt = +new Date();
	})
	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('time(ss:ms):', time.getSeconds(), ':', time.getMilliseconds())
	})

	test('[1,1]', () => {
		expect(maxArea([1,1])).toBe(1);
	})

	test('[1,8,6,2,5,4,8,3,7]', () => {
		expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
	})

	test('[1,1,1,1,100,100,1,1,1]', () => {
		expect(maxArea([1,1,1,1,100,100,1,1,1])).toBe(100);
	})
})

