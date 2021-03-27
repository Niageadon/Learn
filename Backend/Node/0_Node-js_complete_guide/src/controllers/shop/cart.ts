import { CartService, ProductService } from "../../services"
import {Cart, Product} from "../../models";
export default {
	get: async (req, res, next) => {
		const cart = await new CartService().getAll()
		const products = await new ProductService().getAll()

		const result: Cart = new Cart({});
		cart.items?.forEach(cartItem => {
			if (products.some(el => el.id === cartItem.product.id)) {
				result.items.push({ product: cartItem.product, count: cartItem.count})
			}
		})

		console.log(result)
		res.render('shop/cart', {
			pageTitle: 'Cart',
			path: '/shop/cart',
			items: result.items,
			price: result.price
		})
	},

	post: async (req, res, next) => {
		const productId = req.body.id
		const product = await new ProductService().get(productId)

		new CartService().add(product)
		res.redirect('/shop/cart')
	},

	delete: async (req, res, next) => {
		const productId = req.body.id
		await new CartService().delete(productId)
		res.redirect('/shop/cart')
	}
}
