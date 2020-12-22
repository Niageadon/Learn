import { ProductService } from '../../services'
export const get = (req, res, next) => {
	const productId = req.params.productId
	new ProductService().get(productId, item => {
		res.render('admin/products/edit', {
			product: item,
			pageTitle: 'Edit product',
			path: `/admin/products/${productId}/edit`
	})
	})
}
