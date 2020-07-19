const getDelay = require('../timeDecorator');
function printAllPairs(n) {
	for(let i = 0; i < n; i++){
		for(let j= 0; j < n; j++) {
			console.log(i, j)
		}
	}
}


getDelay(() => printAllPairs(888))
