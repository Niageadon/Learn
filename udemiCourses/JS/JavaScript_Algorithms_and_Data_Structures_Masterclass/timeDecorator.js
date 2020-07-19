function getDelay (fun, showResult = true) {
	const startTime = new Date();
	const result = fun();
	const endTime = new Date();
	let delay = endTime - startTime;
	delay = delay > 1e3? delay = (delay / 1e3) + 's': delay + 'ms'
	const data = {delay};
	if(showResult) {
		console.log(11)
		data.result = result
	}
	console.log(data)
	return data
}

module.exports = (getDelay)
