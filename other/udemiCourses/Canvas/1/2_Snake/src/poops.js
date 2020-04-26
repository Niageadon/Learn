export {poops}
import {game} from './game';
import {snake} from './snake';

let poops = {
	cells: [],
	render() {
		this.cells.forEach(({x, y}) => {
			game.ctx.drawImage(game.sprites.poop, x, y)
		})
	},
	stain(snakeHead) {
		return  this.cells.find(({row, col}) => row === snakeHead.row && col === snakeHead.col )
	}
}
