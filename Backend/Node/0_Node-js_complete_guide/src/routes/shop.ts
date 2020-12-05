import express = require('express')
const router = express.Router()
const path = require('path')
import { rootPath } from '../utils'

router.use('/', (req, res, next) => {
	res.sendFile(path.join(rootPath,'views', 'shop.html'))
})

export default router
