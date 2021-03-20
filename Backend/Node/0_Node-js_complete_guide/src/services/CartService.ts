import { HttpService } from './HttpService'
import { ProductService } from './ProductService'
import { Cart, Product } from '../models'
import fs = require("fs")
import path = require("path")
export class CartService extends HttpService<Cart> {
	private readonly path
	add(item: Product) {

		fs.readFile(this.path, ((err, data) => {
			let cart = new Cart()
			if (!err) {
				cart = JSON.parse(data as unknown as string) as Cart
			}
			if (cart.items?.map(el => el.item.id).includes(item.id)) {
				cart.items.find(el => el.item.id == item.id).count ++
			} else {
				cart.items.push({ item, count: 1})
			}
			fs.writeFile(this.path, JSON.stringify(cart), (err) => {
			})
		}))
	}
	get(id: number, cb: Function) {
		fs.readFile(this.path, ((err, data) => {
			return err? cb(undefined) : cb(JSON.parse(data as unknown as string).find(el => el.id == id))
		}))
	}
	getAll(cb: Function) {
		fs.readFile(this.path, ((err, data) => {
			return err? cb(undefined) : cb(JSON.parse(data as unknown as string))
		}))
	}

	constructor() {
		super();
		this.path = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json')
	}
}
