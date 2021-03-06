/*
Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.

Например, для 2 января 2015:

var date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014)
P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date.
* * * */
let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
  let d = new Date(date);         // копируем дату
  d.setDate(d.getDate() - days);  // устанавливаем смещение по дням
  return d.getDate()
}
console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));
