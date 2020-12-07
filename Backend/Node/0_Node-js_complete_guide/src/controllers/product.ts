import {items} from "../routes/product";

export const get = (req, res, next) => {
	res.render('add-product', {
		pageTitle: 'Add products',
		path: '/products/add'
	})
}
export const post = (req, res, next) => {
	items.push({
		title: req.body.title
	})
	console.log(req.body)
	res.redirect('/shop')
}
