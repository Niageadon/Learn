// Interface Segregation Principle

class Animal {
	constructor(name) {
		this.name = name
	}
	
	walk() {
		console.log(`${this.name} cam walk`)
	}
	swim() {
		console.log(`${this.name} cam swim`)
	}
	fly() {
		console.log(`${this.name} cam fly`)
	}
}

class Cat extends Animal{
	fly() {
		return null
	}
}

class Crown extends Animal{
	swim() {
		return null
	}
}

class Trout extends Animal{
	walk() {
		return null
	}
	fly() {
		return null
	}
}
