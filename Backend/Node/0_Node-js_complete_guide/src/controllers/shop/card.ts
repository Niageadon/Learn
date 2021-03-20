import { CartService, ProductService } from '../../services'
export const get = async (req, res, next) => {
	new CartService().getAll(cartItems => {
		new ProductService().getAll(products => {
			res.render('shop/cart', {
				pageTitle: 'Cart',
				path: '/shop/cart'
			})
		})
	})
}
