export {poops}
import {game} from './game';

let poops = {
	cells: [],
	render() {
		this.cells.forEach(({x, y}) => {
			game.ctx.drawImage(game.sprites.poop, x, y)
		})
	}
}
