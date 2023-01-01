import {mergeTwoLists, ListNode} from './index';
import {expectInAnyOrderNested} from "../_utils/expectInAnyOrder";

let startAt;
describe('mergeTwoLists', () => {
	beforeAll(() => {
		startAt = +new Date();
	})
	afterAll(() => {
		const time = new Date(+new Date() - startAt);
		console.log('time(ss:ms):', time.getSeconds(), ':', time.getMilliseconds())
	})

	test('[1,2,4], [1,3,4]', () => {
		const result = mergeTwoLists(ListNode.fromArray([1,2,4]), ListNode.fromArray([1,3,4]));
		const answer = ListNode.fromArray([1,1,2,3,4,4]);
		expect(result).toStrictEqual(answer)
	})

	test('[1,1,1], [2,2,2]', () => {
		const result = mergeTwoLists(ListNode.fromArray([1,1,1]), ListNode.fromArray([2,2,2]));
		const answer = ListNode.fromArray([1,1,1,2,2,2]);
		expect(result).toStrictEqual(answer)
	})

	test('[], []', () => {
		const result = mergeTwoLists(ListNode.fromArray([]), ListNode.fromArray([]));
		const answer = ListNode.fromArray([]);
		expect(result).toStrictEqual(answer)
	})

	test('[], [0]', () => {
		const result = mergeTwoLists(ListNode.fromArray([]), ListNode.fromArray([0]));
		const answer = ListNode.fromArray([0]);
		expect(result).toStrictEqual(answer)
	})

	test('[1], []', () => {
		const result = mergeTwoLists(ListNode.fromArray([1]), ListNode.fromArray([]));
		const answer = ListNode.fromArray([1]);
		expect(result).toStrictEqual(answer)
	})

	test('[-4,-2,0,1,4], [-9,-8,-6,-6,-5,-1,1,4,9]', () => {
		const result = mergeTwoLists(ListNode.fromArray([-4,-2,0,1,4]), ListNode.fromArray([-9,-8,-6,-6,-5,-1,1,4,9]));
		const answer = ListNode.fromArray([-9,-8,-6,-6,-5,-4,-2,-1,0,1,1,4,4,9]);
		expect(result).toStrictEqual(answer)
	})

})