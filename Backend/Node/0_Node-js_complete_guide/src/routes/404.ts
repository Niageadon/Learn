import express = require('express')
import { errorController } from '../controllers'
const router = express.Router()
const path = require('path')

router.use(errorController.e404.get)

export default router
