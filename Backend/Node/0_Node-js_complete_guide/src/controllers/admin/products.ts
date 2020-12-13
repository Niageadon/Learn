import { ProductService } from "../../services";
import { Product } from "../../models";
const service = new ProductService()
export * as add from './products.add'

export const post = (req, res, next) => {
	const product = new Product(req.body)
	service.add(product)
	res.redirect('/shop')
}
export const get = (req, res, next) => {
	new ProductService().getAll((items: Product) => {
		res.render('admin/products/index', {
			products: items,
			pageTitle: 'Admin products',
			path: '/admin/products'
		})
	})
}
