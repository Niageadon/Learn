const initialState = {
	books: [],
	loading: true,
	error: null,
	
	cardItems: [
		/*{
			id: 3,
			title: 'book 1',
			count: 3,
			total: 150
		}*/
	],
	orderTotal: 200
}
class OrderItem {
	constructor(data, options) {
		this.id = data?.id
		this.title = data?.title
		this.count = data?.count ?? 1
			if(options?.inc) this.count++;
			if(options?.dec) this.count--;
		this.price = data?.price
		this.total = this.price * this.count
		
	}
}

const updateCardItems = (cardItems, item, index) => {
	console.log(item)
	if(index === -1) {
		return [
			...cardItems,
			item,
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
			const item = index !== -1?
				new OrderItem({...state.cardItems[index]}, {inc: true})
				: new OrderItem({...state.books.find(el => el.id === bookId)})
			return {
				...state,
				cardItems: updateCardItems(state.cardItems, new OrderItem(item), index)
			}
		}
		case 'BOOKS_REMOVED_FROM_CARD': {
			const bookId = action.payload;
			const index = state.cardItems.findIndex(el => el.id === bookId);

			return {
				...state,
				cardItems: [
					...state.cardItems.slice(0, index),
					...state.cardItems.slice(index + 1),
				]
			}
		}
		case 'BOOK_REMOVED_FROM_CARD': {
			const bookId = action.payload;
			const index = state.cardItems.findIndex(el => el.id === bookId);
			const item = new OrderItem({...state.cardItems[index]}, {dec: true})
			
			return {
				...state,
				cardItems: [
					...state.cardItems.slice(0, index),
					item,
					...state.cardItems.slice(index + 1),
				]
			}
		}
		default: {
			return state;
		}
	}
}

export default reducer;
