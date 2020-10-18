// @ts-ignore
const notes = new Array(13)
	.fill(null)
	.map((_, i) => ({
		id: Date.now() + i,
		title: `note ${i}`
	}))
module.exports = notes
