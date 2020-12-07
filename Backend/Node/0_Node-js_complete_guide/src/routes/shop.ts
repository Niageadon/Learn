import express = require('express')
const router = express.Router()
const path = require('path')
import { rootPath } from '../utils'
import { product } from './'
router.use('/', (req, res, next) => {
	res.render('shop', { products: product.items, pageTitle: 'shop', path: '/shop' })
})

export default router
