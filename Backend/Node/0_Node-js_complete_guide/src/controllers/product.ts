import { items } from "../routes/product";
import { ProductService } from "../services";
import { Product } from "../models";
const service = new ProductService()
export const get = (req, res, next) => {
	res.render('products/add', {
		pageTitle: 'Add products',
		path: '/products/add'
	})
}
export const post = (req, res, next) => {
	items.push({
		title: req.body.title
	})
	service.add(new Product(req.body.title))
	res.redirect('/shop')
}
