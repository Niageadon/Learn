function validAnagram(a, b) {   // O(N**2)
	if(a.length !== b.length) {
		return false
	}
	const temp = a.split('');
	for(let char of b) {
		if(temp.includes(char)) {
			const index = temp.findIndex(el => el === char);
			temp.slice(index, 1);
		} else {
			return false
		}
	}
	return true
}
function validAnagram1(a, b) {  //O(N)
	if(a.length !== b.length) {
		return false
	}
	const lookup = {};
	for(let char of a) {
		lookup[char] = lookup[char]?  lookup[char] + 1: 1;
	}
	for(let char of b) {
		if(!lookup[char]) {
			return false
		} else {
			lookup[char] -= 1
		}
	}
	return true
}
console.log(validAnagram('boba', 'abob'))
console.log(validAnagram1('boba', 'abob'))
