export {game}

import {board} from './board'
import {snake} from './snake'
import {food} from './food'
import {poops} from './poops'

let game = {
    dimensions: {
        max: {
            width: 640,
            height: 360,
        },
        min: {
            width: 285,
            height: 285
        }
    },
    width: 0,
    height: 0,
    canvas: document.getElementById('mycanvas'),
    ctx: null,
    sprites: {
        background: null,
        body: null,
        bomb: null,
        cell: null,
        food: null,
        head: null,
        poop: null,
    },

    init() {
        return new Promise(resolve => {
            this.ctx = this.canvas.getContext('2d');
            this.initDimensions();
            
            board.create();
            snake.create();
            food.create();
            window.addEventListener("keydown", e => {
                snake.start(e.keyCode);
            });
            resolve()
        })
    },
    initDimensions() {
        const dimensions = {
            maxWidth: this.dimensions.max.width,
            maxHeight: this.dimensions.max.height,
            minWidth: this.dimensions.min.width,
            minHeight: this.dimensions.min.height,
            currentWidth: window.innerWidth,
            currentHeight: window.innerHeight,
        }
        let calcWidth = (data) => {
            this.width = Math.floor(data.currentWidth * data.maxHeight / data.currentHeight);
            this.width = Math.min(this.width, data.maxWidth);
            this.width = Math.max(this.width, data.minWidth);
        }
        const calcHeight = (data) => {
	        this.height = Math.floor(this.width * data.currentHeight / data.currentWidth);
        }
        calcWidth(dimensions);
        calcHeight(dimensions);
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.height = '100%';
    },
    preload() {
        return new Promise(resolve => {
            let index = 0;
            
            const onImageLoad = () => {
                index++;
                if(index >= Object.keys(this.sprites).length) {
                    resolve();
                }
            }
            for(let sprite in this.sprites) {
                this.sprites[sprite] = new Image();
                this.sprites[sprite].src = `./img/${sprite}.png`;
                this.sprites[sprite].addEventListener('load', onImageLoad)
            }
        })
    },
    start: async function() {
        await this.init();
        await this.preload();
        //await this.create();
        const game = setInterval(() => {
            this.update();
        }, 200)
    },
    update() {
        window.requestAnimationFrame(() => {

            snake.move();
            this.render();
            //this.run();
            if(snake.dead) {
                alert('gave over')
                window.location.reload();
            }
        });
    },
    render() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    
        this.ctx.drawImage(this.sprites.background, (this.width - this.sprites.background.width) / 2, (this.height - this.sprites.background.height) / 2);
        board.render();
        snake.render();
        poops.render();
        food.render();
    }
    
    
}

