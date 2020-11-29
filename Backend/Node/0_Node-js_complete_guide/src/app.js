const http = require('http')
const handle = require('./routes')

const server = http.createServer((req, res) => {

	handle(req)

})
server.listen(3000)
