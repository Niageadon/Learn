import nc from 'next-connect'
const notes = require('../../../data/data')
type req = {
	json: Function
	body: any
}
const handler = nc()
	.post((req: req, res: req) => {
		const note = {
			...req.body,
			id: Date.now()
		}
		notes.push(note)
		res.json({ data: note })
	})
	.get((req, res: req) => {
		console.log(11, notes)
		res.json({ data: notes })
	})
export default handler
