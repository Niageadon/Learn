import express = require('express')
const router = express.Router()
const path = require('path')
import { rootPath } from '../utils'

router.get('/add', (req, res, next) => {
	res.sendFile(path.join(rootPath,'views', 'add-product.html'))
})
router.post('/', (req, res, next) => {
	console.log(req.body)
	res.redirect('/')
})

export default router
