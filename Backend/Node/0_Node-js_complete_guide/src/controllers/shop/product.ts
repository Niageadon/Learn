import { ProductService } from '../../services'
import { Product } from '../../models'

export const get = async (req, res, next) => {
	const id = parseInt(req.params.productId)
	new ProductService().get(id, item => {
		res.render('shop/product', {
			product: item,
			pageTitle: 'shop',
			path: `/products/${item.id}`
		})
	})
}
