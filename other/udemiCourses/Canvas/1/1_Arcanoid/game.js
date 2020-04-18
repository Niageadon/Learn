let game = {
    start: function() {
        this.ctx = document.getElementById('mycanvas').getContext('2d');
        let background = new Image();                    // создаём изображение
        background.src = "./img/background.png";
        console.log(background)
        window.requestAnimationFrame(() => {    // Отрисовываем
            this.ctx.drawImage(background, 0, 0);   // Намечаем его
        });
    }
};

window.addEventListener("load", () => {
    game.start();
});
