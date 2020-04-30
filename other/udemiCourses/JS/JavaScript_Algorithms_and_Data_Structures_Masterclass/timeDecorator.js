function getDelay (fun) {
	const startTime = new Date();
	const result = fun();
	const endTime = new Date();
	let delay = endTime - startTime;
	delay = delay > 1e3? delay = delay / 1e3 + 's': delay + 'ms'
	console.log({result, delay})
	return({result, delay})
}

module.exports = (getDelay)
