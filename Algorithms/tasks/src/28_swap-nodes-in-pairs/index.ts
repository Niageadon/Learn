export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
    toArray() {
        const result = [];
        let a: ListNode = this;
        while (1) {
            result.push(a.val)
            if (a.next) {
                a = a.next;
            } else {
                break
            }
        }
        return result;
    }

    static fromArray(arr: number[]): ListNode {
        const result = new ListNode();
        let node = result;
        arr.forEach((n, index) => {
            if(index) {
                node.next = new ListNode();
                node = node.next;
            }
            node.val = n;
        })
        return result;
    }
}

/*
* Runtime
Details
54ms
Beats 67.13%of users with TypeScript
Memory
Details
43.94MB
Beats 81.34%of users with TypeScript*/
export function swapPairs(head: ListNode | null): ListNode | null {
    let node = head;
    while(1) {
        if (node?.next) {
            [node.val, node.next.val] = [node.next.val, node.val];
        } else {
            break
        }
        node = node.next?.next;
    }

    return head;
};
