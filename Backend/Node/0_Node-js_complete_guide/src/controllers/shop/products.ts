import { ProductService } from '../../services'
import { Product } from '../../models'

export const get = async (req, res, next) => {
	const items = await new ProductService().getAll()
	res.render('shop/products', {
		products: items,
		pageTitle: 'shop',
		path: '/shop/products'
	})
}
