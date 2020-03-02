const numArr: number[] = [1, 2, 3, 4];
const strArr: string[] = ['biba', 'boba'];

function reverse<T>(arr: T[]): T[] {
	return arr.reverse();
}

console.log(reverse(numArr));
console.log(reverse(strArr));
