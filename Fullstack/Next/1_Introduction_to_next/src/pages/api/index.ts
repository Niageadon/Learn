import nc from 'next-connect'
type req = {
	json: Function
}
const handler = nc()
	.get((req: req, res) => {
		req.json({ message: 'kk' })
	})
	.post((req: req, res) => {
		req.json({ message: 'posted' })
	})
export default (req, res) => {
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({ message: 'hello' }))
}
