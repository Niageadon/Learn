import {swapPairs, ListNode} from './index';
import {expectInAnyOrder} from "../_utils/expectInAnyOrder";

let startAt;
describe('removeDuplicates', () => {
	beforeAll(() => {
		startAt = +new Date();
	})

	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('time(ss:ms):', time.getSeconds(), ':', time.getMilliseconds())
	})


	test('1', () => {
		const result = [2,1,4,3,5];
		const answer = swapPairs(ListNode.fromArray([1,2,3,4,5])).toArray();
		expect(result).toStrictEqual(answer)
	})
})
