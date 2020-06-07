export default class BookStoreService {
	constructor() {
		this.books = [
			{
				id: 1,
				title: 'Martin Eden',
				author: 'Jack London',
				price: 11,
				img: 'https://thumbs-prod.si-cdn.com/ufPRE9RHUDHqQdOsLvYHhJAxy1k=/fit-in/1600x0/https://public-media.si-cdn.com/filer/91/91/91910c23-cae4-46f8-b7c9-e2b22b8c1710/lostbook.jpg'
			}
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
