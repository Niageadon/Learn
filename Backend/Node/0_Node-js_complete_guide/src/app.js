const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
	const url = req.url
	const method = req.method
	switch (url) {
		case '/message': {
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

			break
		}
		case '/': {
			res.setHeader('Content-Type', 'text/html')
			res.write('<form action="/message" method="POST">')
			res.write('<input type="number" name="value">')
			res.write('<button type="submit">add</button>')
			res.write('<form/>')
			res.end()
			break
		}
	}

})
server.listen(3000)
