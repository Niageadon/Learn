/*
Создайте декоратор makeCaching(f), который берет функцию f и возвращает обертку, которая кеширует её результаты.

В этой задаче функция f имеет только один аргумент, и он является числом.

При первом вызове обертки с определенным значением аргумента – она вызывает f и запоминает её результат.
При втором и последующих вызовах с тем же значением аргумента – возвращается сохраненное значение результата.
Должно работать так:

function f(x) {
  return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert( a == b ); // true (значение закешировано)

b = f(2);
alert( a == b ); // false, другой аргумент => другое значение
*/


// оборачиваемая функция
function work(x){
  return Math.random() * x;
}

// функция - обёртка
function makeLogging(f){
  let log = {};
  return function (x) {
    if (log[x]) {return log[x]}
    return log[x] = (f.call(this, x))
  }
}

work = makeLogging(work);
let arr = [];
arr[0] = work(1);
arr[1] = work(2);
arr[2] = work(1);
arr[3] = work(2);
arr[4] = work(3);
arr[5] = work(1);

alert(arr[0] === arr[2]);
alert(arr[1] === arr[3]);

