function linearSearch(arr, value) {
	// O(1) - best
	// O(N) - average && worst
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === value) {
			return i
		}
	}
}

console.log(linearSearch([1,2,3,4,5], 4))
