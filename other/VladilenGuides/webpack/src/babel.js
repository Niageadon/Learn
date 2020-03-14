async function start() {
	return await Promise.resolve('some text')
}

start().then(console.log(234))
console.log(22)
