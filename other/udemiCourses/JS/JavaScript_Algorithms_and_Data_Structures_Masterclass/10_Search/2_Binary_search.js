function linearSearch(arr, value) {
	let start = 0;
	let end = arr.length - 1;
	let middle = Math.ceil((end - start) / 2);
	while(start <= middle) {
		console.log(start, middle, end)
		if(arr[middle] === value) {
			return middle
		} else if(arr[middle] < value) {
			start = middle;
			middle = Math.ceil(((end - start) / 2) + start);
		} else {
			end = middle;
			middle = Math.floor(((end - start) / 2) + start);
		}
	}
	return -1
}

console.log(linearSearch([1,2,3,4,5, 7, 22, 89, 106], 106))
