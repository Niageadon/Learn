/*

Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.

Эта задача состоит из двух частей, которые можно решать одна за другой.

Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -.

Пример использования:

var calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.

Например, добавим операции умножить *, поделить / и возвести в степень **:

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Поддержка скобок и сложных математических выражений в этой задаче не требуется.
Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
Предусмотрите обработку ошибок. Какая она должна быть – решите сами.


*/
function Calculator() {
  function sum(a, b) {
    return a + b
  }

  this.operators = [];
  this.operators['+'] = {fun: sum};
  this.calculate = function (val) {
    let currentOperator;
    for(let i in this.operators){
      if(val.indexOf(i) !== -1) currentOperator = i;
    }
    let index = val.indexOf(currentOperator);
    let a = +val.slice(0, index - 1);
    let b = +val.slice(index + currentOperator.length, val.length);
    return this.operators[currentOperator].fun(a, b)
  };
  this.addMethod = function(name, func){
    for(let i in this.operators){
      if(i === name) return 'Данная функция уже реализована';
    }
    this.operators[name] = {fun: func};
    //console.log(this.operators)
    //this.operators[name].fun = func;
  }
}



var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 + 3");
console.log(result)
console.log(powerCalc.calculate("2 * 3"))
console.log(powerCalc.calculate("2 / 3"))
console.log(powerCalc.calculate("2 ** 3"))
