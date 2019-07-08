/*
Если во внутренней функции есть своя переменная с именем currentCount – можно ли в ней получить currentCount из внешней функции?

function makeCounter() {
  var currentCount = 1;

  return function() {
    var currentCount;
    // можно ли здесь вывести currentCount из внешней функции (равный 1)?
  };
}* * * */


function makeCounter() {
  var currentCount = 1;

  return function() {
    var currentCount;
    // можно ли здесь вывести currentCount из внешней функции (равный 1)?
  };
}
console.log('Нет, нельзя. Но можно передать аргументом.');

