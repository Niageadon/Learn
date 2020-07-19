// Open Close

class Figure {
	area() {
		throw new Error('This method should be implemented')
	}
}

class Square extends Figure{
	constructor({width}) {
		super();
		this.type = 'square';
		this.width = width;
	}
	area() {
		return this.width ** 2;
	}
}

class Circle extends Figure{
	constructor({diam}) {
		super()
		this.type = 'circle';
		this.diam = diam;
	}
	
	area() {
		return (Math.PI * this.diam ** 2) / 4
	}
}
class Rect extends Square{
	constructor({width, height}) {
		super({width});
		this.type = 'rect';
		this.height = height;
	}
	
	area() {
		return this.width * this.height;
	}
}

class AreaCalculator{
	constructor(figures = []) {
		this.figures = figures;
	}
	
	getFiguresSumArea() {
		return this.figures.reduce((acc, figure) => {
			acc += figure.area();
			return acc
		}, 0)
	}
}

const a = new Square({width: 10});
const b = new Square({width: 20});
const c = new Circle({diam: 1});
const d = new Rect({width: 100, height: 200});
const calculator = new AreaCalculator([d])
console.log(calculator.getFiguresSumArea())
