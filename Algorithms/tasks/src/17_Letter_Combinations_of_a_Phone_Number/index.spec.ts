import { letterCombinations } from './index';
import {expectInAnyOrder} from "../_utils/expectInAnyOrder";

let startAt;
describe('сс', () => {
	beforeAll(() => {
		startAt = +new Date();
	})
	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('duration\n', 's:', time.getSeconds(), '\nms:', time.getMilliseconds())
	})

	test('2', () => {
		expect(letterCombinations('2')).toStrictEqual(["a","b","c"]);
	})

	test('23', () => {
		expectInAnyOrder(["ad","ae","af","bd","be","bf","cd","ce","cf"], letterCombinations('23'))
	})

	test('', () => {
		expectInAnyOrder([], letterCombinations(''))
	})

})


