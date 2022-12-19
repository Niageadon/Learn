import {removeNthFromEnd, ListNode} from './index';
import {expectInAnyOrderNested} from "../_utils/expectInAnyOrder";

let startAt;
describe('threeSum', () => {
	beforeAll(() => {
		startAt = +new Date();
	})
	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('time(ss:ms):', time.getSeconds(), ':', time.getMilliseconds())
	})

	test('[1,2,3,4,5], 2', () => {
		const result = removeNthFromEnd(ListNode.fromArray([1,2,3,4,5]), 2);
		const answer = ListNode.fromArray([1,2,3,5]);
		expect(result).toStrictEqual(answer)
	})

	test('[1], 1', () => {
		const result = removeNthFromEnd(ListNode.fromArray([1]), 1);
		const answer = ListNode.fromArray([]);
		expect(result).toStrictEqual(answer)
	})

	test('[], 1', () => {
		const result = removeNthFromEnd(ListNode.fromArray([]), 1);
		const answer = ListNode.fromArray([]);
		expect(result).toStrictEqual(answer)
	})

	test('[1,2], 1', () => {
		const result = removeNthFromEnd(ListNode.fromArray([1,2]), 1);
		const answer = ListNode.fromArray([1]);
		expect(result).toStrictEqual(answer)
	})

	test('[1,2], 2', () => {
		const result = removeNthFromEnd(ListNode.fromArray([1,2]), 2);
		const answer = ListNode.fromArray([2]);
		expect(result).toStrictEqual(answer)
	})

})