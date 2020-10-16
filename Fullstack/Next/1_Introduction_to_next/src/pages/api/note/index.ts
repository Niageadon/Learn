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
		console.log(11, notes)
		res.json({ data: notes })
	})
export default handler
