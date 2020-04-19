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
        const blockMargin = 8;
        for(let row = 0; row < this.rows; row++) {
            let availableWidth = this.width;
    
            for(let col = 0; col < this.cols; col ++) {
                this.blocks.push({
                    x: (60 + blockMargin) * col,
                    y: (20 + blockMargin) * row
                })
            }
        }
    },
    run() {
        window.requestAnimationFrame(() => {
            this.render()
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
    x: 280,
    y: 300
};

window.addEventListener("load", () => {
    game.start();
});
