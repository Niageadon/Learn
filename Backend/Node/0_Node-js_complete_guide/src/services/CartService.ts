import { HttpService } from './HttpService'
import { ProductService } from './ProductService'
import { Cart, Product } from '../models'
import fs = require("fs")
import path = require("path")
export class CartService extends HttpService<Cart> {
	private readonly path
	add(product: Product) {
		fs.readFile(this.path, ((err, data) => {
			let cart: Cart
			if (err) return
			cart = Cart.fromJson(data)
			if (cart.items?.map(el => el?.product?.id).includes(product.id)) {
				cart.items.find(el => el.product?.id == product.id).count ++
			} else {
				cart.items.push({ product, count: 1})
			}
			fs.writeFile(this.path, JSON.stringify(cart), (err) => {
			})
		}))
	}

	get(id: number): Promise<Cart> {
		return new Promise(resolve => {
			fs.readFile(this.path, ((err, data) => {
				return err? resolve(undefined) : resolve(JSON.parse(data as unknown as string).find(el => el.id == id))
			}))
		})
	}

	getAll(): Promise<Cart> {
		return new Promise((resolve => {
			fs.readFile(this.path, ((err, data) => {
				err? resolve(undefined) : resolve(JSON.parse(data as unknown as string))
			}))
		}))
	}

	delete(id: string) {
		return new Promise((async resolve => {
			let cart: Cart
			fs.readFile(this.path, ((err, data) => {
				err
					? resolve(undefined)
					: resolve(cart = Cart.fromJson(data))

				cart.items = cart.items = cart.items.filter(el => el.product.id !== Number(id))
				fs.writeFile(this.path, JSON.stringify({
					items: cart.items,
					price: cart.price
				} as Cart), (err) => {
				})
			}))

		}))
	}

	constructor() {
		super();
		this.path = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json')
	}
}
