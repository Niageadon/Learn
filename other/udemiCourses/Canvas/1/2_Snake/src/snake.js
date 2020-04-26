export {snake}
import {game} from './game';
import {board} from './board';
import {food} from './food';

let snake = {
    cells: [],
    moving: false,
    direction: false,
    directions: {
        up: {
            row: -1,
            col: 0,
        },
        down: {
            row: 1,
            col: 0,
        },
        left: {
            row: 0,
            col: -1,
        },
        right: {
            row: 0,
            col: 1,
        }
    },
    create() {
        let startCells = [{row: 7, col: 7}, {row: 8, col: 7}];
        this.direction = this.directions.up;

        for (let startCell of startCells) {
            this.cells.push(board.getCell(startCell.row, startCell.col));
        }
    },
    render() {
        game.ctx.drawImage(game.sprites.head, this.cells[0].x, this.cells[0].y);
        this.cells.slice(1).forEach(cell => {
            game.ctx.drawImage(game.sprites.body, cell.x, cell.y);
        });
    },
    start(keyCode) {
        switch (keyCode) {
            case 38:
                this.direction = this.directions.up;
                break;
            case 37:
                this.direction = this.directions.left;
                break;
            case 39:
                this.direction = this.directions.right;
                break;
            case 40:
                this.direction = this.directions.down;
                break;
        }

        this.moving = true;
    },
    move() {
        const cheForFood = () => {
            if(this.cells.includes(food.cell) && cell) {
                return true
            }
        }
        
        if (!this.moving) {
            return;
        }
        // получить следующую ячейку
        let cell = this.getNextCell();
        // если такая ячейка есть
        if(cheForFood()) {
            // Если пересекли еду
            this.cells.unshift(cell);
            this.eatFood();
        } else if (cell) {
            // добавить новую ячейку в snake.cells
            this.cells.unshift(cell);
            // удалить последнюю ячейку из snake.cells
            this.cells.pop();
        }
        

    },
    getNextCell() {
        let head = this.cells[0];

        let row = head.row + this.direction.row;
        let col = head.col + this.direction.col;

        return board.getCell(row, col);
    },
    eatFood() {
        food.create()
    }
};
