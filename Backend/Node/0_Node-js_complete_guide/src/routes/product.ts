import express = require('express')
import { productController } from '../controllers'
export const routes = express.Router()
export const items = []

routes.get('/add', productController.get)
routes.post('/add', productController.post)
