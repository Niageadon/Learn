import { Product } from './Product'
export class Cart {
	items: { item: Product, count: number }[]
	get price(): number {
		return this.items.reduce((acc, el) => {
			return acc + (el.item.price * el.count)
		}, 0)
	}

	constructor(items = []) {
		this.items = items
	}
}
