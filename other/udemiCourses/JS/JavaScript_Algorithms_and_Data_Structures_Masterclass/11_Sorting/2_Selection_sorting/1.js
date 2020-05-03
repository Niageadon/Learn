const getDelay = require('../../timeDecorator');

function selectionSort(arr) {
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		let min = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		if (min !== i) {
			let tmp = arr[i];
			arr[i] = arr[min];
			arr[min] = tmp;
		}
	}
	return arr;
}


// O(N**2)
const arr = new Array(10).fill(1).map(el => Math.floor(Math.random() * 5000));
const arr1 = new Array(10).fill(1).map(el => Math.floor(Math.random() * 5000));
//getDelay(() => selectionSort([3,2,1,5,7,3,3,32] || arr))

console.log(selectionSort([1,4,6,3,21,645, 2]))
