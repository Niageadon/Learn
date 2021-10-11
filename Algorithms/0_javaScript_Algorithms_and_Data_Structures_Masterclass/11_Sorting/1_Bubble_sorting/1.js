const getDelay = require('../../timeDecorator');

/*
Проходим по всем элементам массива
на каждой итареции сравненивем элемент i и i+1, если i+1 окажется меньше - меняем их местами
* */
function swap(arr, n, m) {
	const temp = arr[m]
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

const arr = new Array(5000).fill(1).map(el => Math.floor(Math.random() * 5000));
const arr1 = new Array(5000).fill(1).map(el => Math.floor(Math.random() * 5000));
getDelay(() => bubbleSort(arr), false)
getDelay(() => bubbleSort1(arr1), false)
