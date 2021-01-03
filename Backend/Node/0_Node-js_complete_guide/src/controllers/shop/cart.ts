import { CartService, ProductService } from '../../services'
export const get = (req, res, next) => {
	res.render('shop/cart', {
		pageTitle: 'Cart',
		path: '/cart'
	})
}
export const post = (req, res, next) => {
	const productId = req.body.productId
	new ProductService().get(productId, (product) => {
		new CartService().add(product)
	})

	res.redirect('/cart')
}
