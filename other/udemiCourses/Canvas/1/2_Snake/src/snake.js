export {snake}
import {game} from './game';
import {board} from './board';

let snake = {
	cells: [],
	create() {
		const startPos = [
			{row: 7, col: 7},
			{row: 7, col: 8}
		]
		
		for (let pos of startPos) {
			const cell = board.cells.find(el => el.row === pos.row && el.col === pos.col);
			if(cell) {
				this.cells.push(cell)
			}
		}
	},
	render() {
		this.cells.forEach(el => {
			game.ctx.drawImage(game.sprites.body, el.x, el.y);
		})
	}
}
