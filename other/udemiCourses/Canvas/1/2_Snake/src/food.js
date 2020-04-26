export {food}
import {game} from './game';
import {board} from './board';
import {snake} from './snake';

let food = {
    cell: null,
    create() {
        this.cell = getRandomCell()
        
        function getRandomCell() {
            const usedCells = snake.cells;
            const cells = board.cells;
            const emptyCells = cells.filter(el => !usedCells.includes(el))
            const index = Math.floor(Math.random() * emptyCells.length);
            return emptyCells[index];
        }
    },
    render() {
        game.ctx.drawImage(game.sprites.food, this.cell.x, this.cell.y);
    },
};
