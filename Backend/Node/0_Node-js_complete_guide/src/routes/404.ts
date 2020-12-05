import express = require('express')
const router = express.Router()

router.use((req, res, next) => {
	res.status(404).send(`<h1 style="color: red">404 page</h1>`)
})

export default router
