export default (state, action) => {
		if(!state) {
			return {
				cardItems: [],
				orderTotal: 0
			}
		}
		
		switch (action.type) {
			case 'BOOK_ADDED_TO_CARD': {
				const bookId = action.payload;
				const index = state.shoppingCard?.cardItems?.findIndex(el => el.id === bookId);
				const item = index !== -1?
					new OrderItem({...state.shoppingCard.cardItems[index]}, {inc: true})
					: new OrderItem({...state.bookList.books.find(el => el.id === bookId)})
				return {
					orderTotal: 0,
					cardItems: updateCardItems(state.shoppingCard.cardItems, new OrderItem(item), index)
				}
			}
			case 'BOOKS_REMOVED_FROM_CARD': {
				console.log(22, state)
				const bookId = action.payload;
				const index = state.shoppingCard.cardItems.findIndex(el => el.id === bookId);
				
				return {
					orderTotal: 0,
					cardItems: [
						...state.shoppingCard.cardItems.slice(0, index),
						...state.shoppingCard.cardItems.slice(index + 1),
					]
				}
			}
			case 'BOOK_REMOVED_FROM_CARD': {
				const bookId = action.payload;
				const index = state.shoppingCard.cardItems.findIndex(el => el.id === bookId);
				const item = new OrderItem({...state.shoppingCard.cardItems[index]}, {dec: true})
				
				return {
					orderTotal: 0,
					cardItems: [
						...state.shoppingCard.cardItems.slice(0, index),
						item,
						...state.shoppingCard.cardItems.slice(index + 1),
					]
				}
			}
			default: {
				return state.shoppingCard
			}
		}
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
