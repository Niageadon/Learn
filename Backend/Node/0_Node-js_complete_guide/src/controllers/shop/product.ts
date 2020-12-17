import { ProductService } from '../../services'

export const get = async (req, res, next) => {
	const id = req.params.productId
	new ProductService().get(id, item => {
		console.log(333, item)
		res.render('shop/product', {
			product: item,
			pageTitle: 'product',
			path: `/products/${id}`
		})
	})
}
