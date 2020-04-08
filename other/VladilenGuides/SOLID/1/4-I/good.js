// Interface Segregation Principle

class Animal {
	constructor(name) {
		this.name = name
	}
}

class Cat extends Animal{
}

class Crown extends Animal{
}
class Trout extends Animal{
}

const canWalk = {
	walk() {
		return true
	}
}

const canSwim = {
	swim() {
		return true
	}
}

const caFly = {
	fly() {
		return true
	}
}

const crown = Object.assign(new Crown(), caFly)
console.log(crown.fly())
