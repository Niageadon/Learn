/*
Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
С использованием формулы для суммы арифметической прогрессии.
Пример работы вашей функции:

function sumTo(n) {}

alert( sumTo(100) ); // 5050
Какой вариант решения самый быстрый? Самый медленный? Почему?

  Можно ли при помощи рекурсии посчитать sumTo(100000)? Если нет, то почему?
*/

let first = function (n) {
  let result = 0;
  for (let i = 1; i <= n; i++){
    result += i;
  }
  return result
};
console.group('цикл: ');
console.log(first(2));
console.groupEnd();

let second = function (n) {
  if(n === 1) {return 1}
  return n + second(n - 1)
};
console.group('рекурсия');
console.log( second(5));
console.log('Можно ли при помощи рекурсии посчитать sumTo(100000)?');
console.log(' -Нет, максимальное число вложенных вызово ограничено числом меньшим "100000"');
console.groupEnd();

let third = function (n) {
  return n*(n + 1)/2
};
console.group('по формуле: ');
console.log(third(4));
console.groupEnd();

console.log('----------------------------------------------------------------------');
console.group('Скорость');
console.log('1 - по формуле');
console.log('2 - в цикле');
console.log('3 - рекурсия');
console.groupEnd();
