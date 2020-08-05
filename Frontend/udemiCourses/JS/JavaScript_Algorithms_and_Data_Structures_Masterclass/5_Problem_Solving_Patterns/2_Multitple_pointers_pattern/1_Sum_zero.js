function sumZero(arr) {     // O(N**2)
	// Должен вернуть первую найденную пару чисел из отсортированного массива, дающую в сумме 0
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++){
			if(arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]]
			}
		}
	}
}
function sumZero1(arr) {    // O(N)
	let left = 0;
	let right = arr.length - 1;
	while(left < right) {
		let sum = arr[left] + arr[right];
		if(sum === 0) {
			return [arr[left], arr[right]];
		} else if(sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

console.log(sumZero([-3, -2, 1, 0, 3]));
console.log(sumZero1([-3, -2, 1, 0, 3]));
