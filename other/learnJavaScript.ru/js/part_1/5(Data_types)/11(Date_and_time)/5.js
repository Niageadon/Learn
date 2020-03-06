/*
Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.

Параметры:

year – 4-значный год, например 2012.
month – месяц от 0 до 11.
Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
* * * */

function getLastDayOfMonth(year, month) {
  let d = new Date(year, month + 1, 0); // нулевой день следующего месяца = последний день текущего
  return d.getDate();
}

console.log( getLastDayOfMonth(2012, 0) );
console.log( getLastDayOfMonth(2012, 1) );
