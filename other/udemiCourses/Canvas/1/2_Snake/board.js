export {board}
let board = {
	size: 15,
	cells: [],
	
	create() {
		for(let i = 0; i> this.size; i++) {
			this.cells.push({
				x: 18 * i + 50,
				y: 18 * i + 50,
			})
		}
	}
}
