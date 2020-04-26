export {snake}
import {game} from './game';
import {board} from './board';

const key = {
	bot: 40,
	right: 39,
	top: 38,
	left: 37,
}

let snake = {
	cells: [],
	direction: key.top,
	move() {
		const getNextCell = () => {
			const firstCell = this.cells[0];
			switch (this.direction) {
				case key.top: {
					return this.getCell({row: firstCell.row, col: firstCell.col - 1});
				}
			}
		}
		const cell = getNextCell();
		if(cell) {
			this.cells.unshift(cell)
			this.cells.pop();
		}
		
		/*function popLastCell() {
			this.cells.pop()
		}*/
		
	},
	setEvents() {
		window.addEventListener('keydown', event => {
			const keyCode = event.keyCode;
			console.log(keyCode)

		})
	},
	getCell({row, col}) {
		return board.cells.find(el => el.row === row && el.col === col);
	},
	create() {
		const startPos = [
			{row: 7, col: 7},
			{row: 7, col: 8}
		]
		
		for (let pos of startPos) {
			const cell = this.getCell(pos);
			if(cell) {
				this.cells.push(cell)
			}
		}
	},
	render() {
		this.move();
		console.log(this.cells)
		
		this.cells.forEach(el => {
			game.ctx.drawImage(game.sprites.body, el.x, el.y);
		})
	}
}
