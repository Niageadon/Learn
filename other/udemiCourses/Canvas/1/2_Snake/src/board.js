export {board}
import {game} from './game';

let board = {
	cellsCount: 15,
	size: 285,
	cells: [],
	
	create() {
		let cellSize = 18 + 1;
		let offsetX = (game.width - cellSize * this.cellsCount) / 2;
		let offsetY = (game.height - cellSize * this.cellsCount) / 2;
		console.log(offsetX)
		for(let i = 0; i < this.cellsCount; i++) {
			for(let j = 0; j < this.cellsCount; j++) {
				this.cells.push({
					x: cellSize * i + offsetX,
					y: cellSize * j + offsetY,
					col: i,
					row: j
				})
			}
		}
	},
	render() {
		this.cells.forEach(el => {
			game.ctx.drawImage(game.sprites.cell, el.x, el.y);
		})
	},
	getCell(row, col) {
		return this.cells.find(cell => cell.row === row && cell.col === col);
	},
}
