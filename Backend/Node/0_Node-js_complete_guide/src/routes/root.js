module.exports = (method) => {
	res.setHeader('Content-Type', 'text/html')
	res.write('<form action="/message" method="POST">')
	res.write('<input type="number" name="value">')
	res.write('<button type="submit">add</button>')
	res.write('<form/>')
	res.end()
	return null
}
