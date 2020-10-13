import nc from 'next-connect'
const notes = require('../../../data/data')

const handler = nc()
	.post((req, res) => {
		const note = {
			...req.body,
			id: Date.now()
		}
		notes.push(note)
		res.json({ data: note })
	})
	.get((req, res) => {
		res.json(notes)
	})
export default handler
