import nc from 'next-connect'
const handler = nc()
	.get((req, res) => {
		req.json({ message: 'kk' })
	})
	.post((req, res) => {
		req.json({ message: 'posted' })
	})
export default (req, res) => {
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({ message: 'hello' }))
}
