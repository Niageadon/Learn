export class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val===undefined ? 0 : val)
		this.next = (next===undefined ? null : next)
	}
	toString(): string {
		let result: string = this.val.toString();
		if (this.next) result += this.next.toString();
		return result;
	}
}

export function addTwoNumbers(a: ListNode | null, b: ListNode | null, additional = 0): ListNode | null {
	if ((!a || a.val === null) && (!b || b.val === null) && !additional) return null
	const val = (a && a?.val) + (b && b.val) + additional;
	const nextA = a ? a.next : null
	const nextB = b ? b.next : null
	if (val > 9) return new ListNode(val - 10, addTwoNumbers(nextA, nextB, 1))
	return new ListNode(val, addTwoNumbers(nextA, nextB))
}
