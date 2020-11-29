const messages = require('./messages')
const root = require('./root')
const fs = require('fs')

module.exports = (req, res) => {
	const url = req.url
	const method = req.method
	switch (url) {
		case '/message': messages(method); break
		case '/': root(method); break
	}
}


