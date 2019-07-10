/*

Создайте объект calculator с тремя методами:

read() запрашивает prompt два значения и сохраняет их как свойства объекта
sum() возвращает сумму этих двух значений
mul() возвращает произведение этих двух значений
var calculator = {
  ...ваш код...
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
 **/

let calculator = {
  a: null,
  b: null,
  read: function () {
    this.a = +prompt('Первое значение', '');
    this.b = +prompt('Второе значение', '');
  },
  sum: function () {
    return (this.a && this.b)? this.a + this.b: 'Значения не определены'
  },
  mul: function () {
    return (this.a && this.b)? this.a * this.b: 'Значения не определены'
  }
}

calculator.read();
console.log(calculator.sum())
console.log(calculator.mul())
