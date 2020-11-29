module.exports = (method) => {
	switch (method) {
		case 'POST': {
			const body = []
			req.on('data', (chunk) => {
				console.log('chunk', chunk)
				body.push(chunk)
			})
			req.on('end', () => {
				const parsedBody = Buffer.concat(body).toString()
				const value = parsedBody.split('=')[1]
				fs.writeFileSync('message.txt', value)
				
				console.log('parsedBody', parsedBody)
			})
			res.statusCode = 302
			res.setHeader('Location', '/')
			return res.end()
		}
	}
	return null
}
