import express = require('express')
const router = express.Router()

router.use('/shop', (req, res, next) => {
	res.send(`<h1>hello</h1>`)
})

export default router
