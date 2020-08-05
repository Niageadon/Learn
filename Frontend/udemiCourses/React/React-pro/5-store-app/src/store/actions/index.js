const booksLoaded = (newBooks) => {
	return {
		type: 'FETCH_BOOKS_SUCCESS',
		payload: newBooks
	}
}
const booksRequested = () => {
	return {
		type: 'FETCH_BOOKS_REQUEST',
	}
}
const booksError = (error) => {
	return {
		type: 'FETCH_BOOKS_ERROR',
		payload: error
	}
}
const fetchBooksOld = (bookStoreService, dispatch) => () => {
	dispatch(booksRequested());
	bookStoreService.getBooks()
		.then(data => {
			dispatch(booksLoaded(data));
		})
		.catch(e => {
			dispatch(booksError(e))
		})
}
const fetchBooks = (bookStoreService) => () => (dispatch) => {
	dispatch(booksRequested());
	bookStoreService.getBooks()
		.then(data => {
			dispatch(booksLoaded(data));
		})
		.catch(e => {
			dispatch(booksError(e))
		})
}

const bookAddedToCard = (bookId) => {
	return {
		type: 'BOOK_ADDED_TO_CARD',
		payload: bookId
	}
}
const booksRemovedFromCard = (bookId) => {
	return {
		type: 'BOOKS_REMOVED_FROM_CARD',
		payload: bookId
	}
}
const bookRemovedFromCard = (bookId) => {
	return {
		type: 'BOOK_REMOVED_FROM_CARD',
		payload: bookId
	}
}


export {
	fetchBooks,
	bookAddedToCard,
	booksRemovedFromCard,
	bookRemovedFromCard
}
