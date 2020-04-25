export {board}
let board = {
	size: 15,
	cells: [],
	
	create() {
		console.log(this.cells)
		const margin = 1;
		const pt = 40;
		const pl = 170;
		for(let i = 0; i < this.size; i++) {
			for(let j = 0; j < this.size; j++) {
				this.cells.push({
					x: (18 + margin) * i + pl,
					y: (18 + margin) * j + pt,
				})
			}
		}
	}
}
