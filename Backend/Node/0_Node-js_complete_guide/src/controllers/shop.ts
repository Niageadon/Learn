import { ProductService } from '../services'
import { Product } from '../models'
export const get = (req, res, next) => {
	const items = new ProductService().getAll((items: Product) => {
		res.render('products/list', {
			products: items,
			pageTitle: 'shop',
			path: '/shop'
		})
	})
}
