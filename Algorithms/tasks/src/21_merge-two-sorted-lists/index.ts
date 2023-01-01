export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }

    static fromArray(array: number[]) {
        const list = new ListNode();
        list.val = array[0];
        if (array.length > 1) list.next = ListNode.fromArray(array.slice(1));
        return list;
    }
}

/*
* Runtime
88 ms
Beats
69.36%
Memory
46.1 MB
Beats
6.27%
* */
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!Number.isInteger(list1?.val) && !Number.isInteger(list2?.val)) return list1;
    let result;
    if ((!list2?.val && list1?.val) || list1?.val < list2?.val) {
        result = new ListNode(list1?.val);
        list1 = list1.next
    } else {
        result = new ListNode(list2?.val);
        list2 = list2.next
    }
    let next: ListNode = result;
    while (Number.isInteger(list1?.val) || Number.isInteger(list2?.val)) {
        const listIsExist = Boolean(list2)
        if (Number.isInteger(list1?.val) && (!listIsExist || list1.val < list2?.val)) {
            next.next = new ListNode(list1.val);
            list1 = list1.next
        } else if (listIsExist) {
            next.next = new ListNode(list2.val);
            list2 = list2.next
        }
        next = next.next
    }
    return result;
};
