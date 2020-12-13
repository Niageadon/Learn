import fs = require("fs")
import path = require("path")

interface IProduct {
	title?: string
	imageUrl?: string
	price?: number
	description?: string
}

export class Product implements IProduct {
	title: string
	imageUrl: string
	price: number
	description: string

	constructor(prop: IProduct) {
		this.title = prop.title
		this.imageUrl = prop.imageUrl
		this.price = prop.price
		this.description = prop.description
	}
}
