function same(a, b) {	// O(N**2)
	if (a.length !== b.length) {
		return false;
	}
	var temp = a.map(el => el**2);
	for(let el of b) {
		if (temp.includes(el)) {
			const index = temp.findIndex(num => num === el );
			temp.splice(index, 1);
		}
		else {
			return false;
		}
	};
	return true;
}

function same1(a, b) {	// O(N)
	if(a.length !== b.length) {
		return false
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	for(let val of a) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
	}
	for(let val of b) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
	}
	for(let key in frequencyCounter1) {
		if(!(key ** 2 in frequencyCounter2)) {
			return false
		}
		if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false
		}
	}
	return true
}
console.log(same([1, 2, 3], [1, 4, 8]));
console.log(same1([1, 2, 3], [1, 4, 8]));
console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same1([1, 2, 3], [1, 4, 9]));
