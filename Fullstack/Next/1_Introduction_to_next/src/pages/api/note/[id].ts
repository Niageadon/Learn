import nc from 'next-connect'
const notes = require('../../../data/data')

const getNote = (id: number) => notes.find(el => el.id == id)
const getNoteIndex = (id: number) => notes.findIndex(el => el.id == id)
const handler = nc()
	.get((req, res) => {
		const note = getNote(req.query.id)
		if(!note) {
			res.status(404)
			res.end()
			return
		}
		res.json({data: note})
	})
	.patch((req, res) => {
		const id = req.query.id
		const note = getNote(id)
		if(!note) {
			res.status(404)
			res.end()
			return
		}
		const i = getNoteId(id)
		notes[i] = {...note, ...req.body}
		res.json({data: notes[i]})
	})
	.delete((req, res) => {
		console.log(req,query)
		const id = req.query.id
		const note = getNote(id)
		if(!note) {
			res.status(404)
			res.end()
			return
		}
		const i = getNoteIndex(id)
		notes.slice(i, 1)
		res.json({data: id})
	})

module.exports = handler
