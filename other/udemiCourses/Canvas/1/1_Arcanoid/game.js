let game = {
    stx: null,
    platform: null,
    ball: null,
    sprites: {
        background: null,
        ball: null,
        platform: null,
    },
    
    init() {
        this.ctx = document.getElementById('mycanvas').getContext('2d');
    },
    preload() {
        return new Promise(resolve => {
            let index = 0;
            for(let sprite in this.sprites) {
                this.sprites[sprite] = new Image();
                this.sprites[sprite].src = `./img/${sprite}.png`;
                this.sprites[sprite].addEventListener('load', () => {
                    index++;
                    if(index >= Object.keys(this.sprites).length) {
                        resolve();
                    }
                })
            }
        })
        
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
    },
    start: async function() {
        this.init();
        await this.preload()
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
