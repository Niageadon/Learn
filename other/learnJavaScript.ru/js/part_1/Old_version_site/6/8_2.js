/*
Создайте декоратор makeLogging(func, log), для функции func возвращающий обёртку, которая при каждом вызове добавляет её аргументы в массив log.

Условие аналогично задаче Логирующий декоратор (1 аргумент), но допускается func с любым набором аргументов.

Работать должно так:
function work(a, b) {
  alert( a + b ); // work - произвольная функция
}

function makeLogging(f, log) {}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
  var args = log[i]; // массив из аргументов i-го вызова
  alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}
*/


// оборачиваемая функция
function work(...a){
  console.log('work', a)
}

// функция - обёртка
function makeLogging(f, log){
  return function () {
    let arr = [];
    for (let i = 0; i < arguments.length; i++){
      arr.push(arguments[i])
    }
    log.push(arr);
    f.apply(this, arguments) // исспользуем apply ибо массив вторым аргументом
  }
}

let log = [];
work = makeLogging(work, log);
work(1, 2, 3);
work(4, 5, 6, 7);

for (let i = 0; i < log.length; i++) {
  alert( 'Лог: ' + log[i] );
}

console.log(log);
