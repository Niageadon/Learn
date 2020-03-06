function add(a: number, b: number): number {
	return a + b
}

interface position {
	x: number | undefined,
	y: number | undefined,
	z: number
}

function getPos(x?: number, y?: number) {
	if(!x && !y) {
		return 'no data'
	}
	if(x && !y) {
		const result: position = {
			x: 2,
			y: 0,
			z: 1
		}
		return result
	}
	return {x, y}
}
console.log(getPos(1), getPos(), getPos(3, 4))
