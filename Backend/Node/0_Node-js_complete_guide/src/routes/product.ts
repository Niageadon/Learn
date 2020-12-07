import express = require('express')
import { rootPath } from '../utils'
export const routes = express.Router()
const path = require('path')
export const items = []

routes.get('/add', (req, res, next) => {
	res.render('add-product', { pageTitle: 'Add products' })
})
routes.post('/add', (req, res, next) => {
	items.push({
		title: req.body.title
	})
	console.log(req.body)
	res.redirect('/shop')
})
