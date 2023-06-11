import Arr from './index';

let startAt;
describe('mergeTwoLists', () => {
	beforeAll(() => {
		startAt = +new Date();
	})

	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('time(ss:ms):', time.getSeconds(), ':', time.getMilliseconds())
	})

	test('1', () => {
		const arrnums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
		const rowsCount = 5
		const colsCount = 4
		const result = [
			[19,17,16,15],
			[10,1,14,4],
			[3,2,12,20],
			[7,5,18,11],
			[9,8,6,13]
		];
		const answer = new Arr(...arrnums).snail(rowsCount, colsCount);
		//const result = gen.next().value; // 3
		//const answer = 3;
		expect(result).toStrictEqual(answer)
	})

	test('2', () => {
		const arrnums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
		const rowsCount = 6
		const colsCount = 3
		const result = [[1,12,13],[2,11,14],[3,10,15],[4,9,16],[5,8,17],[6,7,18]];
		const answer = new Arr(...arrnums).snail(rowsCount, colsCount);
		//const result = gen.next().value; // 3
		//const answer = 3;
		expect(result).toStrictEqual(answer)
	})
})