import { ProductService } from '../../services'

export const post = async (req, res, next) => {
	const { productId } = req.params
	await new ProductService().delete(productId)
	res.redirect('/admin/products')
}
