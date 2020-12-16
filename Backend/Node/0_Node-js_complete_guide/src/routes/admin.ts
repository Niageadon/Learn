import express = require('express')
import { adminController } from '../controllers'
const routes = express.Router()
routes.get('/products/add', adminController.products.add.get)
routes.get('/products', adminController.products.get)
routes.post('/products', adminController.products.post)


export default routes
