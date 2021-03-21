import { ProductService } from '../../services'
export const get = async (req, res, next) => {
	const productId = req.params.productId
	const product = await new ProductService().get(productId)
	res.render('admin/products/edit', {
		product: product,
		pageTitle: 'Edit product',
		path: `/admin/products/${productId}/edit`
	})
}
export const post = async (req, res, next) => {
	const payload = req.body
	await new ProductService().put(payload)
	res.redirect('/admin/products')
}
