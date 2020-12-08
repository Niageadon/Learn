export const get = (req, res, next) => {
	res.render('404', { pageTitle: '404', path: '404' })
}
