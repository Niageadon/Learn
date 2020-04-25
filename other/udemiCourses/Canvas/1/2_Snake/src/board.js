export {board}
import {game} from './game';

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
					row: i,
					col: j
				})
			}
		}
	},
	render() {
		this.cells.forEach(el => {
			game.ctx.drawImage(game.sprites.cell, el.x, el.y);
		})
	}
}
