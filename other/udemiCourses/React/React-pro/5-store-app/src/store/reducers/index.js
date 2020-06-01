const initialState = {
	books: [
		{
			id: 1,
			title: '123',
			author: 'boba'
		}
	]
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'BOOKS_LOADED': {
			return {
				books: action.payload
			}
		}
		default: {
			return state;
		}
	}
}

export default reducer;
