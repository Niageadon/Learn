import express = require('express')
import { adminController } from '../controllers'
const routes = express.Router()
routes.get('/products/add', adminController.products.add.get)
routes.post('/products/edit', adminController.products.edit.post)
routes.get('/products/:productId/edit', adminController.products.edit.get)
routes.get('/products', adminController.products.get)
routes.post('/products', adminController.products.post)


export default routes
