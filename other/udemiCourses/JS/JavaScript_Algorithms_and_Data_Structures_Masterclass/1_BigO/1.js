const getDelay = require('../timeDecorator');
function add(n) {
	let result = 0;
	for(let i = 0; i < n; i++) {
		result += i
	}
	return result
}
function add1(n) {
	return n * (n + 1) / 2
}

getDelay(() => add(9e5))
getDelay(() => add1(9e19))
