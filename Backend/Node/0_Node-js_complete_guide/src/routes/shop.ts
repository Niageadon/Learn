import express = require('express')
const router = express.Router()
import { shopController } from '../controllers'
router.use('/', shopController.products.get)
//router.use('/products', shopController.products.get)
router.use('/products/:productId', shopController.product.get)
router.use('/card', shopController.card.get)
router.use('/checkout', shopController.checkout.get)
router.use('/orders', shopController.orders.get)

export default router
