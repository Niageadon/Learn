import { CartService, ProductService } from "../../services"
import {Cart, Product} from "../../models";
export const get = async (req, res, next) => {
	const cart = await new CartService().getAll()
	new ProductService().getAll((products: Product[]) => {
		const result: Cart = new Cart();
		cart.items?.forEach(cartItem => {
			console.log(cart)
			if (products.some(el => el.id === cartItem.item.id)) {
				result.items.push({ item: cartItem.item, count: cartItem.count})
			}
		})
		res.render('shop/cart', {
			pageTitle: 'Cart',
			path: '/shop/cart',
			items: result.items,
			price: result.price
		})
	})
}

export const post = (req, res, next) => {
	const productId = req.body.productId
	new ProductService().get(productId, (product) => {
		new CartService().add(product)
	})

	res.redirect('/cart')
}
