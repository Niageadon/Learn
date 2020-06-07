const initialState = {
	books: [],
	loading: true,
	error: null,
	
	cardItems: [
		{
			id: 3,
			title: 'book 1',
			count: 3,
			total: 150
		}
	],
	orderTotal: 200
}

const updateCardItems = (cardItems, item, index) => {
	if(index === -1) {
		return [
			...cardItems,
			item
		]
	}
	return  [
		...cardItems.slice(0, index),
		item,
		...cardItems.slice(index + 1)
	]
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
			const index = state.cardItems.findIndex(el => el.id === bookId);
			const item = {...state.cardItems[index], count: state.cardItems[index]?.count ?? 0 + 1 };

			return {
				...state,
				cardItems: updateCardItems(state.cardItems, item, index)
			}
			
		}
		default: {
			return state;
		}
	}
}

export default reducer;
