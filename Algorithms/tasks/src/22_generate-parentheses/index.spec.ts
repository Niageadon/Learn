import {generateParenthesis} from './index';
import {expectInAnyOrder} from "../_utils/expectInAnyOrder";

let startAt;
describe('generateParenthesis', () => {
	beforeAll(() => {
		startAt = +new Date();
	})
	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('time(ss:ms):', time.getSeconds(), ':', time.getMilliseconds())
	})

	test('3', () => {
		const attempt = generateParenthesis(3);
		const answer = ["((()))","(()())","(())()","()(())","()()()"];
		expectInAnyOrder(answer, attempt)
	})

	test('1', () => {
		const attempt = generateParenthesis(1);
		const answer = ["()"];
		expect(attempt).toStrictEqual(answer)
	})

	test('2', () => {
		const attempt = generateParenthesis(2);
		const answer = ["()()",'(())'];
		expectInAnyOrder(answer, attempt)
	})
})
