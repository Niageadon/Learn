const getDelay = require('../../timeDecorator');
/*
Бежим по всему массиву в поиске наименьшего
В конце обхода меняем местами элемент с которого начался поиск и наименьшее найденное
* */
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

console.log(selectionSort([1,4,6,3,21,645, 2]))
