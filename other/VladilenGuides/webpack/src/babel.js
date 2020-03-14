async function start() {
	return await Promise.resolve('some text')
}

start().then(console.log )
