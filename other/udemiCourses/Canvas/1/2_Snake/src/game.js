export {game}

import {board} from './board'
let game = {
    ctx: null,
    sprites: {
        background: null,
        body: null,
        bomb: null,
        cell: null,
        food: null,
        head: null,
    },
    init() {
        return new Promise(resolve => {
            this.ctx = document.getElementById('mycanvas').getContext('2d');
            board.create();
            console.log(33)
            //this.setEvents();
            resolve()
        })
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
        this.run();
    },
    run() {
        window.requestAnimationFrame(() => {
            
            this.render();
            
            this.run();
        });
    },
    render() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    
        this.ctx.drawImage(this.sprites.background, 0, 0);
        board.cells.forEach(el => {
            this.ctx.drawImage(this.sprites.cell, el.x, el.y);
        })
    }
    
    
}

