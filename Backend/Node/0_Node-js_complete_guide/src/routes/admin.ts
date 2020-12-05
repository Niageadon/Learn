import express = require('express')
const router = express.Router()

router.get('/add-product', (req, res, next) => {
	res.send(`<form action="/admin/product" method="post">
		<input type="text" name="title">
		<button type="submit">Add product</button>
	</form>`)
})
router.post('/product', (req, res, next) => {
	console.log(req.body)
	res.redirect('/')
})

export default router
