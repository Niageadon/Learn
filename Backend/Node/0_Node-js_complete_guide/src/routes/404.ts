import express = require('express')
import { rootPath } from '../utils'
const router = express.Router()
const path = require('path')

router.use((req, res, next) => {
	res.render('404', { pageTitle: '404', path: '404' })
})

export default router
