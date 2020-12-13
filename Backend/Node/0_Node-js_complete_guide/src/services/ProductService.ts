import { HttpService, IHttpService } from './HttpService'
import { Product } from '../models'
import fs = require("fs")
import path = require("path")
export class ProductService extends HttpService<Product> {
	private readonly path
	get(id: number) {
		return new Product({})
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
			console.log(items[0])
			fs.writeFile(this.path, JSON.stringify(items), (err) => {
				console.log(err)
			})
		}))
	}
	constructor() {
		super();
		this.path = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')
	}
}
