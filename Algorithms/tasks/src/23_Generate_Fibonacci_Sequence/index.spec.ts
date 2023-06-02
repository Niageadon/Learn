import {fibGenerator} from './index';

let startAt;
describe('mergeTwoLists', () => {
	beforeAll(() => {
		startAt = +new Date();
	})
	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('time(ss:ms):', time.getSeconds(), ':', time.getMilliseconds())
	})

	test('3', () => {
		const gen = fibGenerator();
		gen.next().value; // 0
		gen.next().value; // 1
		gen.next().value; // 1
		gen.next().value; // 2
		const result = gen.next().value; // 3
		const answer = 3;
		expect(result).toStrictEqual(answer)
	})

	test('5', () => {
		const gen = fibGenerator();
		gen.next().value; // 0
		gen.next().value; // 1
		gen.next().value; // 1
		gen.next().value; // 2
		gen.next().value; // 3
		const result = gen.next().value; // 5
		const answer = 5;
		expect(result).toStrictEqual(answer)
	})

	test('8', () => {
		const gen = fibGenerator();
		gen.next().value; // 0
		gen.next().value; // 1
		gen.next().value; // 1
		gen.next().value; // 2
		gen.next().value; // 3
		gen.next().value; // 5
		const result = gen.next().value; // 8
		const answer = 8;
		expect(result).toStrictEqual(answer)
	})
})