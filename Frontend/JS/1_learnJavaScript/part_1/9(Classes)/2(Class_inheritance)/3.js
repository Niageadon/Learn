/*
Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty.

Пример:

class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// метод hasOwnProperty от Object.prototype
// rabbit.__proto__ === Object.prototype
alert( rabbit.hasOwnProperty('name') ); // true
Но что если мы явно напишем явно "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?

В чем разница?

Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

class Rabbit extends Object {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') ); // true* */

class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') ); // true
