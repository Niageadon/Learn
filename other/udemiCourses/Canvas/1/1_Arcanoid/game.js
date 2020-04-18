let game = {
    stx: null,
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
        this.ctx.drawImage(this.sprites.ball, 50, 50);
        this.ctx.drawImage(this.sprites.platform, 50, 150);
    },
    start: async function() {
        this.init();
        await this.preload()
        this.run();
    }
};

window.addEventListener("load", () => {
    game.start();
});
