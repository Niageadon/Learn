/*
Создайте декоратор makeLogging(f, log), который берет функцию f и массив log.
Он должен возвращать обёртку вокруг f, которая при каждом вызове записывает («логирует») аргументы в log, а затем передает вызов в f.
В этой задаче можно считать, что у функции f ровно один аргумент.

Работать должно так:
function work(a) {
}

function makeLogging(f, log) {  }

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
  alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}
*/

let log = [];
// оборачиваемая функция
function work(a){
  console.log('work', a)
}

// функция - обёртка
function makeLogging(f, log){
  return function (a) {
    log.push(a);
    f.call(this, a)
  }
}

work = makeLogging(work, log);
work(1);
work(2);

for (var i = 0; i < log.length; i++) {
  alert( 'Лог:' + log[i] );
}

console.log(log);
