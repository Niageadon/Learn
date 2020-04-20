const Key = {
    space: 32,
    right: 39,
    left: 37
}

let game = {
    width: 640,
    stx: null,
    platform: null,
    ball: null,
    blocks: [],
    rows: 4,
    cols: 8,
    sprites: {
        background: null,
        ball: null,
        platform: null,
        block: null
    },
    
    init() {
        this.ctx = document.getElementById('mycanvas').getContext('2d');
        this.setEvents();
    },
    setEvents() {
        window.addEventListener('keydown', event => {
            const keyCode = event.keyCode;
            if(keyCode === Key.left || keyCode === Key.right) {
                this.platform.push(event.keyCode)
            }
            if(keyCode === Key.space) {
                this.platform.fire()
            }
        })
        window.addEventListener('keyup', event => {
            this.platform.stop();
            //this.render();
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
    create() {
        const blockMargin = 4;
        for(let row = 0; row < this.rows; row++) {
            let availableWidth = this.width;
    
            for(let col = 0; col < this.cols; col ++) {
                this.blocks.push({
                    x: (60 + blockMargin) * col + 65,
                    y: (20 + blockMargin) * row + 35
                })
            }
        }
    },
    updatePos() {
        this.platform.move();
        this.ball.move();
    },
    run() {
        window.requestAnimationFrame(() => {
            this.updatePos();
            this.render()
            this.run();
        });
    },
    render() {
        this.ctx.drawImage(this.sprites.background, 0, 0);
        this.ctx.drawImage(this.sprites.ball, 0, 0, this.ball.width, this.ball.height, this.ball.x, this.ball.y, this.ball.width, this.ball.height);
        this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);
        this.renderBlocks()
    },
    renderBlocks() {
        for(let block of this.blocks) {
            this.ctx.drawImage(this.sprites.block, block.x, block.y);
        }
    },
    start: async function() {
        this.init();
        await this.preload();
        await this.create();
        this.run();
    }
};


game.ball = {
    x: 320,
    y: 280,
    dx: 0,
    dy: 0,
    velocity: 1,
    width: 20,
    height: 20,

    move() {
        this.y -= this.dy;
        this.x += this.dx;
    }
};
game.platform = {
    width: 100,
    step: 1,
    velocity: 3,
    dx:  0,
    x: 280,
    y: 300,
    ball: game.ball,
    fire() {
        this.ball.dy = this.ball.velocity;
        this.ball = null;
    },
    push(direction) {
        if(direction === Key.right) {
            this.dx += this.velocity
        } else if(direction === Key.left) {
            this.dx -= this.velocity
        }
    },
    stop() {
        this.dx = 0;
    },
    move() {
        const minPosX = 0;
        const maxPosX = 640 - 100;
        if(this.dx) {
            this.x += this.dx;
            if(this.x <= minPosX) {
                this.x = minPosX;
            }
            if(this.x >= maxPosX) {
                this.x = maxPosX;
            }
            
            if(this.ball) {
                this.ball.x = this.x + this.width / 2 - this.ball.width / 2
            }
//            this.dx = 0;
        }
    },
};

window.addEventListener("load", () => {
    game.start();
});
