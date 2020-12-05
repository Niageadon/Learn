import express = require('express')
import { rootPath } from '../utils'
const router = express.Router()
const path = require('path')

router.use((req, res, next) => {
	res.sendFile(path.join(rootPath, 'views', '404.html'))
})

export default router
