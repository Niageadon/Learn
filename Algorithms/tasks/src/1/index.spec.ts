import {addTwoNumbers, ListNode} from './index'

test('[2, 4, 3] + [5, 6, 4] = [7, 0, 8]', () => {
	expect(addTwoNumbers(
		new ListNode(2, new ListNode(4, new ListNode(3))),
		new ListNode(5, new ListNode(6, new ListNode(4))),
	)?.toString()).toBe('708');
});

test('[2, 4, 3] + [5, 6, 4] = [7, 0, 8]', () => {
	expect(addTwoNumbers(
		new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))),
		new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
	)?.toString()).toBe('89990001');
});
