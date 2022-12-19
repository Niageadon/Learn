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
78 ms
Beats
82.67%*/

/*Memory
45.1 MB
Beats
12.92%*/
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let length = 0;
    let i = 0;
    let prev: ListNode;
    let list: ListNode = head;
    if (head.next) while (1) {
        i++;
        if (!list.next) {
            length = i;
            break;
        }
        list = list.next;
    }
    list = head;
    if (length === -1) return head;
    if (length === 0 && n === 1) {
        head.val = undefined;
        return head;
        // return null
    }
    const itemIndex = length - n;
    for (let i = 0; i < length + 1 ; i++) {
        if (i === itemIndex - 1) prev = list
        if ((i === itemIndex) ) {
            if (prev) {
                prev.next = list.next
                break
            } else {
                return list.next;
            }
        }
        list = list.next
    }
    return head;
};