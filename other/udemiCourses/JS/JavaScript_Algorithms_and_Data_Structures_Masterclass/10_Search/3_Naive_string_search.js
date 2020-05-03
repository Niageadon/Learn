function naiveSearch(long, short) {
	let temp = 0;
	for(let i = 0; i < long.length - short.length; i++) {
		for(let j = 0; j < short.length; j++) {
			if(long[i + j] === short[j]) {
				temp ++;
				if(check()) {
					return i
				}
			} else {
				temp = 0;
				break;
			}
		}
	}
	function check() {
		if(temp === short.length) {
			return true
		}
	}
}

console.log(naiveSearch('brobabibabobabobu', 'boba'))
