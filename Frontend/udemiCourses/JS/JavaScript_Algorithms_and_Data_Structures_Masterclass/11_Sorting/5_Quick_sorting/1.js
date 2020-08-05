const getDelay = require('../../timeDecorator');

/*
Выбрать из массива элемент, называемый опорным. Это может быть любой из элементов массива. От выбора опорного элемента не зависит корректность алгоритма, но в отдельных случаях может сильно зависеть его эффективность (см. ниже).
Сравнить все остальные элементы с опорным и переставить их в массиве так, чтобы разбить массив на три непрерывных отрезка, следующих друг за другом: «элементы меньшие опорного», «равные» и «большие»[1].
Для отрезков «меньших» и «больших» значений выполнить рекурсивно ту же последовательность операций, если длина отрезка больше единицы.
* */

function quickSort(arr) {   //O(N**2)
	//let middle;
	let left = [];
	let right = [];
	//const sorted = [];
	for(let i = 0; i < arr.length; i++) {
		//if(sorted.includes(i)) continue
		for(let j = 0; j < arr.length; j++) {
			if(i === j) continue
			if(arr[i] > arr[j]) {
				left.push(arr[j])
			} else {
				right.push(arr[j])
			}
		}
		//middle = left.length
		arr = left.concat(arr[i], right);
		left = [];
		right = [];
		//sorted.push(middle)
	}
	return arr
}

function quickSort1(items, left, right) {   //O(N**2)
	let index;
	if (items.length > 1) {
		left = typeof left != "number" ? 0 : left;
		right = typeof right != "number" ? items.length - 1 : right;
		index = partition(items, left, right);
		if (left < index - 1) {
			quickSort(items, left, index - 1);
		}
		if (index < right) {
			quickSort(items, index, right);
		}
	}
	return items;
	
	function partition(items, left, right) {
		let pivot   = items[Math.floor((right + left) / 2)],
			i       = left,
			j       = right;
		while (i <= j) {
			while (items[i] < pivot) {
				i++;
			}
			while (items[j] > pivot) {
				j--;
			}
			if (i <= j) {
				swap(items, i, j);
				i++;
				j--;
			}
		}
		return i;
	}
	
	function swap(arr, n, m) {
		const temp = arr[m]
		arr[m] = arr[n];
		arr[n] = temp;
	}
}

function quickSort2(arr, left = 0, right = arr.length - 1) {    //O(log(N)) - O(N**2)
	let len = arr.length,
		index
	
	if(len > 1) {
		
		index = partition(arr, left, right)
		
		if(left < index - 1) {
			quickSort2(arr, left, index - 1)
		}
		
		if(index < right) {
			quickSort2(arr, index, right)
		}
		
	}
	
	return arr
	
}

function partition(arr, left, right) {
	let middle = Math.floor((right + left) / 2),
		pivot = arr[middle],
		i = left,                 // Start pointer at the first item in the array
		j = right                 // Start pointer at the last item in the array
	
	while(i <= j) {
		
		// Move left pointer to the right until the value at the
		// left is greater than the pivot value
		while(arr[i] < pivot) {
			i++
		}
		
		// Move right pointer to the left until the value at the
		// right is less than the pivot value
		while(arr[j] > pivot) {
			j--
		}
		
		// If the left pointer is less than or equal to the
		// right pointer, then swap values
		if(i <= j) {
			[arr[i], arr[j]] = [arr[j], arr[i]]  // ES6 destructuring swap
			i++
			j--
		}
	}
	
	return i
	
}

const arr = new Array(10000).fill(1).map((el, index) => Math.floor(Math.random() * 5000 / (index + 1)));
const arr1 = new Array(10000).fill(1).map((el, index) => Math.floor(Math.random() * 5000 / (index + 1)));
const arr2 = new Array(100).fill(1).map((el, index) => Math.floor(Math.random() * 5000 / (index + 1)));

// O(log(N))
//console.log(arr, arr1);
getDelay(() => quickSort(arr), false);
getDelay(() => quickSort1(arr1), false);
getDelay(() => quickSort2(arr2), false);
