const http = require('http')
const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers)
	switch (req.url) {
		case '/create': {
			res.setHeader('Content-Type', 'text/html')
			res.write('<h1>Home</h1>')
			res.end()
			break
		}
		case '/': {
			res.setHeader('Content-Type', 'text/html')
			res.write('<form action="/create" method="POST">')
			res.write('<input type="number" name="value">')
			res.write('<button type="submit">add</button>')
			res.write('<form/>')
			res.end()
			break
		}
	}

})
server.listen(3000)
