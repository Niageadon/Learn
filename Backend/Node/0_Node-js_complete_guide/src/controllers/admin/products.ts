import { ProductService } from "../../services";
import { Product } from "../../models";
const service = new ProductService()
export * as add from './products.add'
export * as edit from './products.edit'
export * as delete from './products.delete'

export const post = (req, res, next) => {
	const product = new Product(req.body)
	product.id = Math.random()
	service.add(product)
	res.redirect('/')
}
export const get = async (req, res, next) => {
	const items: Product[] = await new ProductService().getAll()
	res.render('admin/products/index', {
		products: items,
		pageTitle: 'Admin products',
		path: '/admin/products'
	})
}
