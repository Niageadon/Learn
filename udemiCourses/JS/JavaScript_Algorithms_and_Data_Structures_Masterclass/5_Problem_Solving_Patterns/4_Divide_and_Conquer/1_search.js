function search(arr, value) {   // O(N)
	// Принимает на вход сортироанный массив и элемент, индекс которого нужно найти
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === value) {
			return i
		}
	}
	return -1
}
function search1(arr, value) {  // O(log(N))
	let min = 0;
	let max = arr.length - 1;
	
	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		if(arr[middle] < value) {
			min = middle + 1;
		} else if(arr[middle] > value) {
			max = middle - 1;
		} else {
			return middle;
		}
	}
	return -1
}
console.log(search1([1,2,3,4], 4))
