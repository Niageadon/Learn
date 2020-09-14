const getDelay = require('../../timeDecorator');
Object.defineProperty(Array.prototype, 'flat', {
	value: function(depth = 1) {
		return this.reduce(function (flat, toFlatten) {
			return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
		}, []);
	}
});
/*
Поразрядная сортировка
1 Итерируем массив n раз, n - разрядность самого большого элемента в массиве
2 На каждой итерации идём по разрядам от 0 до n. и помещаем элемент в 1 из 10 боксов, в заисимости от чиста, находящегося в разряде
3 После, последовательно от 0 до 9 бокса числа пушатся в результурующий массив, который подается аргументом в п.2
* */
function radixSort(arr) {
	const maxLength = arr.reduce((acc, el) => {
		return el > acc? el: acc
	}, -Infinity).toString().length
	// К-во итераций определяется максимальной длиной элементов в массиве
	// Если применять сортировку для массивов, где разрядность чисел одинаковая, то алгоритм можно облегчить
	for(let i = 0; i < maxLength; i++) {
		let box = sortBox(arr, i);
		arr = mergeBoxes(box);
	}
	return arr
	
	function sortBox(arr, iteration) {
		const box = new Array(10);
		for(let i = 0; i < box.length; i++) {
			box[i] = [];
		}
		
		for(let i = 0; i < arr.length; i++) {
			// Дополняем при необходимости число нулями
			const value = pad(arr[i], iteration + 1);
			// расчитываем индекс исходя из текущей итерации
			const index = value.length - iteration;
			// Получаем номер бокса
			let boxNum = value[index - 1]
			box[boxNum].push(arr[i]);
		}
		return box
	}
	function mergeBoxes(arr) {
		let result = [];
		for(let i = 0; i < arr.length; i++) {
			for(let j = 0; j < arr[i].length; j++) {
				result.push(arr[i][j]);
			}
		}
		return result
	}
	
	function pad(num, size) {
		let s = num+"";
		while (s.length < size) s = "0" + s;
		return s;
	}
	console.log(maxLength)
}

function radixSort1(arr) {
	let maxLength = largestNum(arr);
	
	for (let i = 0; i < maxLength; i++) {
		let buckets = Array.from({ length: 10 }, () => []);
		
		for (let j = 0; j < arr.length; j++) {
			let num = getNum(arr[j], i);
			
			if (num !== undefined) buckets[num].push(arr[j]);
		};
		arr = buckets.flat();
	};
	return arr;
	
	function largestNum(arr) {
		let largest = "0";
		
		arr.forEach(num => {
			const strNum = String(num);
			
			if (strNum.length > largest.length) largest = strNum;
		});
		
		return largest.length;
	};
	function getNum(num, index) {
		const strNum = String(num);
		let end = strNum.length - 1;
		const foundNum = strNum[end - index];
		
		if (foundNum === undefined) return 0;
		else return foundNum;
	};
};

const arr = new Array(10000).fill(1).map((el, index) => Math.floor(Math.random() * 5000 / (index + 1)));
const arr1 = new Array(10000).fill(1).map((el, index) => Math.floor(Math.random() * 5000 / (index + 1)));
const arr2 = new Array(100).fill(1).map((el, index) => Math.floor(Math.random() * 5000 / (index + 1)));

// O(log(N))
//console.log(arr, arr1);
getDelay(() => radixSort(arr), false);
getDelay(() => radixSort1(arr1), false);
