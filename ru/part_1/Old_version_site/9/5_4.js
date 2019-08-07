/* done

Есть реализация часиков на прототипах. Создайте класс, расширяющий её, добавляющий поддержку параметра precision, который будет задавать частоту тика в setInterval. Значение по умолчанию: 1000.

Для этого класс Clock надо унаследовать. Пишите ваш новый код в файле extended-clock.js.
Исходный класс Clock менять нельзя.
Пусть конструктор потомка вызывает конструктор родителя. Это позволит избежать проблем при расширении Clock новыми опциями.
P.S. Часики тикают в браузерной консоли (надо открыть её, чтобы увидеть).

*/
function Clock(options) {
    this._template = options.template;
}
Clock.prototype._render = function render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
};
Clock.prototype.stop = function() {
    clearInterval(this._timer);
};
Clock.prototype.start = function() {
    this._render();
    var self = this;
    this._timer = setInterval(function() {
        self._render();
    }, 1000);
};

function extend(Child, Parent) {
    Child.prototype = inherit(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.parent = Parent.prototype;
}
function inherit(proto) {
    function F() {}
    F.prototype = proto;
    return new F;
}

function ModClock(options) {
    Clock.apply(this, arguments);
    this.precision = 1000;
    this.start = function () {
        this._render();
        var self = this;
        this._timer = setInterval(function() {
            self._render();
        }, this.precision);
    }
}
ModClock.prototype = Object.create(Clock.prototype);

var clock = new ModClock({
    template: 'h:m:s'
});
console.log(clock);
clock.precision = 200;
clock.start();
// ваш код
