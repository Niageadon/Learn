import {product} from "../routes";

export const get = (req, res, next) => {
	res.render('shop', { products: product.items, pageTitle: 'shop', path: '/shop' })
}

