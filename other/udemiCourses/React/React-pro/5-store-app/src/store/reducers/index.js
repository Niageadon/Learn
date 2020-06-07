const initialState = {
	books: [],
	loading: true,
	error: null,
	
	cardItems: [
		{
			id: 1,
			name: 'book 1',
			count: 3,
			total: 150
		}
	],
	orderTotal: 200
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_BOOKS_REQUEST': {
			return {
				...state,
				books: [],
				loading: true,
				error: null
			}
		}
		case 'FETCH_BOOKS_SUCCESS': {
			return {
				...state,
				books: action.payload,
				loading: false,
				error: null
			}
		}
		case 'FETCH_BOOKS_ERROR': {
			return {
				...state,
				books: [],
				loading: false,
				error: action.payload
			}
		}
		case 'BOOK_ADDED_TO_CARD': {
			const bookId = action.payload;
			const book = state.books.find(el => el.id === bookId);
			const newItem = {
				id: bookId,
				name: book.title,
				count: 1,
				total: book.price
			}
			
			return {
				...state,
				cardItems: [...state.cardItems, newItem]
			}
		}
		default: {
			return state;
		}
	}
}

export default reducer;
