const getDelay = require('../../timeDecorator');

/*
Массив делится пополам до тех пор, пока не будет состоять из одного элемента
Затем эти элементы соеденияхтся обратно, при это сортируясь
* */

function mergeSort(arr) {
	if(arr.length === 1) {
		return arr
	}
	const len = arr.length;

	const index = Math.floor(len / 2);
	const left = arr.slice(0, index);
	const right = arr.slice(index);
	return merge(mergeSort(left), mergeSort(right))
	
	function divideArr(arr) {
		const len = arr.length;
		const index = Math.floor(len / 2);
		let result = [];
		result.push(arr.slice(0, index));
		if(result[0].length > 1) {
			const temp = result[0];
			result.shift();
			result.push(...divideArr(temp));
		}
		result.push(arr.slice(index));
		if(result[result.length - 1].length >1) {
			const temp = result[result.length - 1];
			result.pop();
			result.push(...divideArr(temp))
		}
		return result
	}
	function merge(a, b) {
		// Объеденияет и сортирует 2 отсортированных массива
		let result = [];
		let i = 0;
		let j = 0;
		while (i < a.length && j < b.length) {
			if(b[j] > a[i]) {
				result.push(a[i]);
				i++;
			} else {
				result.push(b[j]);
				j++;
			}
		}
		while (i < a.length) {
			result.push(a[i]);
			i++;
		}
		while (j < b.length) {
			result.push(b[j]);
			j++;
		}
		return result
	};
}

function mergeSort1 (unsortedArray) {
	// No need to sort the array if the array only has one element or empty
	if (unsortedArray.length <= 1) {
		return unsortedArray;
	}
	// In order to divide the array in half, we need to figure out the middle
	const middle = Math.floor(unsortedArray.length / 2);
	
	// This is where we will be dividing the array into left and right
	const left = unsortedArray.slice(0, middle);
	const right = unsortedArray.slice(middle);
	
	// Using recursion to combine the left and right
	return merge(
		mergeSort1(left), mergeSort1(right)
	);
	
	function merge (left, right) {
		let resultArray = [], leftIndex = 0, rightIndex = 0;
		
		// We will concatenate values into the resultArray in order
		while (leftIndex < left.length && rightIndex < right.length) {
			if (left[leftIndex] < right[rightIndex]) {
				resultArray.push(left[leftIndex]);
				leftIndex++; // move left array cursor
			} else {
				resultArray.push(right[rightIndex]);
				rightIndex++; // move right array cursor
			}
		}
		
		// We need to concat here because there will be one element remaining
		// from either left OR the right
		return resultArray
			.concat(left.slice(leftIndex))
			.concat(right.slice(rightIndex));
	}
}

const arr = new Array(100000).fill(1).map((el, index) => Math.floor(Math.random() * 5000 / (index + 1)));
const arr1 = new Array(100000).fill(1).map((el, index) => Math.floor(Math.random() * 5000 / (index + 1)));

// O(log(N))
//console.log(arr, arr1);
getDelay(() => mergeSort(arr), false);
getDelay(() => mergeSort(arr1), false);
