import express = require('express')
const router = express.Router()
const path = require('path')
router.use('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../','views', 'shop.html'))
})

export default router
