/*

Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
Метод sum() возвращает сумму запомненных свойств.
Метод mul() возвращает произведение запомненных свойств.
Пример использования:

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );


*/
function Calculator() {
  let a, b;
  this.read = function () {
    a = +prompt('Введите первое значение:', '');
    b = +prompt('Введите второе значение:', '');
  };
  this.sum = function () {
    return (a && b)? a + b: 'Значение не введены'
  };
  this.mul = function () {
    return (a && b)? a * b: 'Значение не введены'
  }
}
var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );
