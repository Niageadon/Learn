/*
Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.

Например, для 2 января 2015:

var date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014)
P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date.
* * * */
let date = new Date(2012, 1, 1);

function getDateAgo(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDay() - days)
}
console.log(getDateAgo(date, 3))
