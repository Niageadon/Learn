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
            const left = 37;
            const right = 39;
            if(event.keyCode === left) {
                this.platform.dx = this.platform.dx - this.platform.velocity
                console.log(this.platform.dx)
            } else if(event.keyCode === right) {
                this.platform.dx += this.platform.velocity
                console.log(this.platform.dx)
            }
            //this.render();
        })
        window.addEventListener('keyup', event => {
            this.platform.dx = 0;
            //this.render();
        })
    },
    movePlatform() {
        const minPosX = 0;
        const maxPosX = 640 - 100;
        if(this.platform.dx) {
            this.platform.x += this.platform.dx;
            if(this.platform.x <= minPosX) {
                this.platform.x = minPosX;
            }
            if(this.platform.x >= maxPosX) {
                this.platform.x = maxPosX;
            }
            this.platform.dx = 0;
        }
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
    run() {
        window.requestAnimationFrame(() => {
            this.movePlatform();
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
    width: 20,
    height: 20
};
game.platform = {
    step: 1,
    velocity: 3,
    dx:  0,
    x: 280,
    y: 300
};

window.addEventListener("load", () => {
    game.start();
});
