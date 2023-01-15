import {generateParenthesis} from './index';
import {expectInAnyOrder} from "../_utils/expectInAnyOrder";

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
		const result = generateParenthesis(3);
		const answer = ["((()))","(()())","(())()","()(())","()()()"];
		expect(result).toStrictEqual(answer)
	})

	test('1', () => {
		const result = generateParenthesis(1);
		const answer = ["()"];
		expect(result).toStrictEqual(answer)
	})

	test('2', () => {
		const result = generateParenthesis(2);
		const answer = ["()()",'(())'];
		expectInAnyOrder(answer, result)
	})
})