/*done

Сработает ли вызов rabbit.eat() ?

Если да, то в какой именно объект он запишет свойство full: в rabbit или animal?


var animal = {
  eat: function() {
    this.full = true;
  }
};

var rabbit = {
  __proto__: animal
};

rabbit.eat();

*
*/
console.log('Да, сработает.');
console.log('Свойство будет записано в rabbit, т.к. контекст определяется вызовом');

var animal = {
    eat: function() {
        this.full = true;
    }
};

var rabbit = {
    __proto__: animal
};

rabbit.eat();

