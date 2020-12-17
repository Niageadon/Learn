import express = require('express')
const router = express.Router()
import { shopController } from '../controllers'
//router.use('/', shopController.products.get)
router.get('/products/:productId', shopController.product.get)
router.get('/products', shopController.products.get)

router.post('/cart', shopController.card.post)
router.get('/cart', shopController.card.get)

router.get('/checkout', shopController.checkout.get)
router.get('/orders', shopController.orders.get)

export default router
