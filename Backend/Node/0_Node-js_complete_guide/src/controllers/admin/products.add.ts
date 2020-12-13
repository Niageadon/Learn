export const get = (req, res, next) => {
	res.render('admin/products/add', {
		pageTitle: 'Add products',
		path: '/admin/products/add'
	})
}
