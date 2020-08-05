function countUniqueValues(arr) {   // O(N)
	// Считает количество уникальный значений(num) в отсортироанном массиве
	let count = arr.length? 1: 0;
	let temp = arr[0]
	for(let val of arr.slice(1)) {
		if(!(val === temp)) {
			count++;
			temp = val;
		}
	}
	return count
}
console.log(countUniqueValues([1,1,1,2,2,3,4,5,5,6]))
