/*
Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:

Например:

var d = new Date(2014, 0, 30); // 30 января 2014
alert( formatDate(d) ); // '30.01.14'
P.S. Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.
* * * */

let d = new Date(2014, 0, 30);

function formatDate(date) {
  let day = (date.getDate().toString().length >= 2)? date.getDate(): '0' + date.getDate();
  let month = (date.getMonth().toString().length >= 2)? date.getMonth(): '0' + (date.getMonth() + 1);
  let year = date.getFullYear() % 100;
  return day + '.' + month + '.' + year
}
console.log( formatDate(d));
