const getDelay = require('../../timeDecorator');

function insertionSort(arr) {   //O(N**3)
	let temp = [arr[0]];
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
			for(let j = 0; j < temp.length; j++) {
				if(currentVal < temp[j]) {
					insert(temp, j, currentVal);
					break;
				}
			}
			if(temp.length < i + 1) {
				temp.push(currentVal)
			}
	}
	return temp
	
	function insert(arr, index, val) {
		for(let i = arr.length; i > index; i--) {
			arr[i] = arr[i-1];
		}
		arr[index] = val;
	}
}

function insertionSort1(nums) { //O(N**2)
	for (let i = 1; i < nums.length; i++) {
		let j = i - 1
		let temp = nums[i]
		while (j >= 0 && nums[j] > temp) {
			nums[j + 1] = nums[j]
			j--
		}
		nums[j+1] = temp
	}
	return nums
}

const arr = new Array(100000).fill(1).map((el, index) => Math.floor(Math.random() * 5000 / (index + 1)));
const arr1 = new Array(100000).fill(1).map((el, index) => Math.floor(Math.random() * 5000 / (index + 1)));


getDelay(() => insertionSort(arr), false);
getDelay(() => insertionSort1(arr1), false);
