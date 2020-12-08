import express = require('express')
const router = express.Router()
import { shopController } from '../controllers'
router.use('/', shopController.get)

export default router
