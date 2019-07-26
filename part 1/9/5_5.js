/* done

Есть класс Menu. У него может быть два состояния: открыто STATE_OPEN и закрыто STATE_CLOSED.

Создайте наследника AnimatingMenu, который добавляет третье состояние STATE_ANIMATING.

При вызове open() состояние меняется на STATE_ANIMATING, а через 1 секунду, по таймеру, открытие завершается вызовом open() родителя.
Вызов close() при необходимости отменяет таймер анимации (назначаемый в open) и передаёт вызов родительскому close.
Метод showState для нового состояния выводит "анимация", для остальных – полагается на родителя.

*/

function Menu(state) {
    this.STATE_OPEN = 1;
    this.STATE_CLOSED = 0;
    this._state = state || this.STATE_CLOSED;
};


Menu.prototype.open = function() {
    this._state = this.STATE_OPEN;
};
Menu.prototype.close = function() {
    this._state = this.STATE_CLOSED;
};
Menu.prototype._stateAsString = function() {
    switch (this._state) {
        case this.STATE_OPEN:
            return 'открыто';
        case this.STATE_CLOSED:
            return 'закрыто';
    }
};
Menu.prototype.showState = function() {
    console.log('alert', this._stateAsString());
};




function AnimatingMenu() {
    Menu.apply(this, arguments);
    let open = this.open;
    let close = this.close;
    let timer;
    let _stateAsString = this._stateAsString;
    this.open = function () {
        this._state = this.STATE_ANIMATING;
        timer = setTimeout(()=>{
            open.apply(this);
        }, 1000);
    };
    this.close = function () {
        if(timer) clearTimeout(timer);
        close.apply(this);
    };
   this._stateAsString = function() {
       let answer = _stateAsString.apply(this);
       if(!answer){
           if(this._state === this.STATE_ANIMATING) {
               answer =  'анимация';
           }
       }
       return answer
   };
}
AnimatingMenu.prototype = Object.create(Menu.prototype);
AnimatingMenu.prototype.STATE_ANIMATING = 3;
///////
// использование..

let menu = new AnimatingMenu();
menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function() {
    menu.showState(); // открыто

    menu.close();
    menu.showState(); // закрыто (закрытие без анимации)
}, 1000);
