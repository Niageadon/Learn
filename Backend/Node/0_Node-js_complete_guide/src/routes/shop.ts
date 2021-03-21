import express = require('express')
const router = express.Router()
import { shopController } from '../controllers'
router.get('/', shopController.products.get)
router.get('/products/:productId', shopController.product.get)
router.get('/products', shopController.products.get)
//router.use('/card', shopController.card.get)
router.get('/shop/cart', shopController.cart.get)
router.post('/shop/add-to-cart', shopController.cart.post)
router.get('/checkout', shopController.checkout.get)
router.get('/orders', shopController.orders.get)

export default router
