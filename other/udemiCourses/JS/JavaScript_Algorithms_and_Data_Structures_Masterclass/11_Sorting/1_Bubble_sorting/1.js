const getDelay = require('../../timeDecorator');
function swap(arr, n, m) {
	const temp = arr[n]
	arr[m] = arr[n];
	arr[n] = temp;
}

function bubbleSort(arr) {
	let count = 1;
	while (count) {
		count = 0;
		for (let i = 0; i < arr.length; i++) {
			if(arr[i] > arr[i + 1]) {
				count++;
				swap(arr, i, i + 1)
			}
		}
	}
	return arr
}
function bubbleSort1(arr) {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if(arr[j] > arr[j + 1]) {
				swap(arr, j + 1, j)
			}
		}
	}
	return arr
}

// O(N**2)
const arr = new Array(5000).fill(1).map(el => Math.floor(Math.random() * 5000));
const arr1 = new Array(5000).fill(1).map(el => Math.floor(Math.random() * 5000));
getDelay(() => bubbleSort(arr), false)
getDelay(() => bubbleSort1(arr1), false)
