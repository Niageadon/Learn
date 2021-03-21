import { ProductService } from '../../services'
import { Product } from '../../models'

export const get = async (req, res, next) => {
	const id = req.params.productId
	const product: Product = await new ProductService().get(id)

	res.render('shop/product', {
		product: product,
		pageTitle: 'shop',
		path: `/products/${id}`
	})
}
