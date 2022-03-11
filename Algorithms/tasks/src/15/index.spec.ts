import {calc, biba} from './index';

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
		expect(calc(biba)).toStrictEqual([[1,2], [2,1]]);
	})

})


