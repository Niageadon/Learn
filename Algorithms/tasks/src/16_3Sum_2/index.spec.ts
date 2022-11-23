import { threeSumClosest } from './index';

let startAt;
describe('сс', () => {
	beforeAll(() => {
		startAt = +new Date();
	})
	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('duration(ss:ms):', time.getSeconds(), ':', time.getMilliseconds())
	})

	test('[-1,2,1,-4]', () => {
		expect(threeSumClosest([-1,2,1,-4], 1)).toStrictEqual(2);
	})

	test('[0,0,0]', () => {
		expect(threeSumClosest([0,0,0], 1)).toStrictEqual(0);
	})

	test('[0,1,2]', () => {
		expect(threeSumClosest([0,1,2], 3)).toStrictEqual(3);
	})

	test('[0,1,2, 8, 11, 99]', () => {
		expect(threeSumClosest([0,1,2, 8, 11, 99], 109)).toStrictEqual(109);
	})

	test('[4,0,5,-5,3,3,0,-4,-5]', () => {
		expect(threeSumClosest([4,0,5,-5,3,3,0,-4,-5], -2)).toStrictEqual(-2);
	})
})


