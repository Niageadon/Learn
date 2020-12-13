import { ProductService } from '../../services'
import { Product } from '../../models'

export const get = (req, res, next) => {
	const id = parseInt(req.params.productId)
	const item: Product = new ProductService().get(id)
	res.render('shop/product', {
		product: item,
		pageTitle: 'shop',
		path: `/products/${item.id}`
	})
}
