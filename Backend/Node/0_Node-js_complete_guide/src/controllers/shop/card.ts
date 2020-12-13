export const get = (req, res, next) => {
	res.render('shop/card', {
		pageTitle: 'Card',
		path: '/shop/card'
	})
}
