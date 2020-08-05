import updateBookList from './book-list'
import updateShoppingCard from './shopping-card'

const reducer = (state, action) => {
	/*switch (action.type) {
		case 'FETCH_BOOKS_REQUEST':
		case 'FETCH_BOOKS_SUCCESS':
		case 'FETCH_BOOKS_ERROR': {
			return {
				...state,
				bookList: updateBookList(state, action)
			}
		}
		case 'BOOK_ADDED_TO_CARD':
		case 'BOOKS_REMOVED_FROM_CARD':
		case 'BOOK_REMOVED_FROM_CARD': {
			return {
				...state,
				shoppingCard: updateShoppingCard(state, action)
			}
		}
		default: {
			return state;
		}
	}*/
	return {
		bookList: updateBookList(state, action),
		shoppingCard: updateShoppingCard(state, action),
	}
}

export default reducer;
