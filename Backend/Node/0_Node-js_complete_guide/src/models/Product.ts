import fs = require("fs")
import path = require("path")

export class Product {
	title: string

	constructor(title: string) {
		this.title = title
	}
}
