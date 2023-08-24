import {maxProfit} from './index';

let startAt;
describe('maxProfit', () => {
	beforeAll(() => {
		startAt = +new Date();
	})

	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('time(ss:ms):', time.getSeconds(), ':', time.getMilliseconds())
	})

	test('1', () => {
		const result = 0;
		const answer = maxProfit([7,6,4,3,1]);
		expect(result).toStrictEqual(answer)
	})

	test('2', () => {
		const result = 5;
		const answer = maxProfit([7,1,5,3,6,4]);
		expect(result).toStrictEqual(answer)
	})
})
