// Open Close

class Figure {
}

class Square extends Figure{
	constructor({width}) {
		super();
		this.type = 'square';
		this.width = width;
	}
}

class Circle extends Figure{
	constructor({diam}) {
		super()
		this.type = 'circle';
		this.diam = diam;
	}
}
class Rect extends Square{
	constructor({width, height}) {
		super({width});
		this.type = 'rect';
		this.height = height;
	}
}

class AreaCalculator{
	constructor(figures = []) {
		this.figures = figures;
	}
	
	getFiguresSumArea() {
		return this.figures.reduce((acc, figure) => {
			//console.log(figure)
			switch (figure.type) {
				case 'square': {
					acc += figure.width ** 2;
					break;
				}
				case 'circle': {
					acc += (Math.PI * figure.diam ** 2) / 4;
					break;
				}
				case 'rect': {
					acc += (figure.width * figure.height)
				}
				default: {
				}
			}
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
