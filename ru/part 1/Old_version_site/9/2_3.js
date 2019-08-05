/*done

Создадим новый объект, вот такой:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert( this.name );
};

var rabbit = new Rabbit("Rabbit");
Одинаково ли сработают эти вызовы?

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
Все ли они являются кросс-браузерными? Если нет – в каких браузерах сработает каждый?

*/
console.group('Работа')
console.log('У них разный контекст вызова.');
console.log('У первого this - rabbit, у оставшихся - Rabbit.prototype');
console.log('Отсюда - сработает только первый вызов. У остальных метот не определён.');
console.groupEnd();

console.group('Совместимость');
console.log('Первый и второй вызовы - кросс-браузерные.');
console.log('Третий - не будет работать в ie8, по причине отсутствия метода "getPrototypeOf"');
console.log('Четвёртый - не будет работать в ie10, т.к. там отсутствует поле "__proto__"');
console.groupEnd();
