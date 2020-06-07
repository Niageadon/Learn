export default class BookStoreService {
	constructor() {
		this.books = [
			{
				id: 1,
				title: 'Martin Eden',
				author: 'Jack London',
				price: 11,
			},
			{
				id: 2,
				title: 'Catch-22',
				author: 'joseph heller',
				price: 21,
			},
		]
	}
	
	getBooks() {
		return new Promise((resolve, reject) => {
			if(Math.random() > 0.98) {
				reject('error-on-loading');
			}
			setTimeout(() => resolve(this.books), 500);
		})
	}
	
}
