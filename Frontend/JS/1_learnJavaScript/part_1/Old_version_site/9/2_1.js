/*done

В примерах ниже создаётся объект new Rabbit, а затем проводятся различные действия с prototype.

Каковы будут результаты выполнения? Почему?

Начнём с этого кода. Что он выведет?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

alert( rabbit.eats );
Добавили строку (выделена), что будет теперь?









function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats );
А если код будет такой? (заменена одна строка):

function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats );
А такой? (заменена одна строка)


function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

delete rabbit.eats; // (*)

alert( rabbit.eats );
И последний вариант:


function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

delete Rabbit.prototype.eats; // (*)

alert( rabbit.eats );




*/


console.log('1 - true. Свойство наследуется от прототипа.');
console.log('2 - true. Своство не изменится, т.к. свойство prototype работает только для оператора new.');
console.log('3 - false. Ссылка на объект у __proto__ и prototype одна и та же.');
console.log('4 - true. Delete удаляет собственное свойство, а мы берется оно из прототипа.');
console.log('4 - undefined. Свойство из прототипа удалено.');
