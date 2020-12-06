import express = require('express')
const router = express.Router()
const path = require('path')
import { rootPath } from '../utils'
import { product } from './'
router.use('/', (req, res, next) => {
	console.log(product.items)
	res.render('shop')
})

export default router
