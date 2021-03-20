import { HttpService, IHttpService } from './HttpService'
import { Product } from '../models'
import fs = require("fs")
import path = require("path")
export class ProductService extends HttpService<Product> {
	private readonly path
	get(id: number, cb: Function) {
		fs.readFile(this.path, ((err, data) => {
			return err? cb(undefined) : cb(JSON.parse(data as unknown as string).find(el => el.id == id))
		}))
	}
	getAll(cb: Function) {
		fs.readFile(this.path, ((err, data) => {
			return err? cb([]) : cb(JSON.parse(data as unknown as string))
		}))
	}
	add(item: Product) {
		fs.readFile(this.path, ((err, data) => {
			let items = []
			if (!err) {
				items = JSON.parse(data as unknown as string)
			}
			items.push(item)
			fs.writeFile(this.path, JSON.stringify(items), (err) => {
			})
		}))
	}
	put(item: Product) {
		fs.readFile(this.path, ((err, data) => {
			let items = []
			if (!err) {
				items = JSON.parse(data as unknown as string)
			}
			const index = items.indexOf(el => el.id == item.id)
			items.splice(index, 1, item)
			fs.writeFile(this.path, JSON.stringify(items), (err) => {
			})
		}))
	}
	delete(itemId: number) {
		fs.readFile(this.path, ((err, data) => {
			let items = []
			if (!err) {
				items = JSON.parse(data as unknown as string)
			}
			const index = items.indexOf(el => el.id == itemId)
			items.splice(index, 1)
			fs.writeFile(this.path, JSON.stringify(items), (err) => {
			})
		}))
	}
	constructor() {
		super();
		this.path = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')
	}
}