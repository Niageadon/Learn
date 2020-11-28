const http = require('http')
const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers)
	res.setHeader('Content-Type', 'text/html')
	res.statusCode = 200
	res.write('<div>aa</div>')
	res.end()
})
server.listen(3000)
