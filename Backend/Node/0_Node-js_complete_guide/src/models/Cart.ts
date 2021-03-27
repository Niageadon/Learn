import { Product } from './Product'
export class Cart {
	items: { product: Product, count: number }[]
	get price(): number {
		return this.items.reduce((acc, el) => {
			return acc + (el.product.price * el.count)
		}, 0)
	}

	constructor({items = []}) {
		this.items = items ?? []
	}

	static fromJson(json: string | Buffer) {
		const cart = new Cart({...JSON.parse(json as string)}) ?? new Cart({})
		if (!(cart.items instanceof Array)) cart.items = []
		return cart
	}
}
