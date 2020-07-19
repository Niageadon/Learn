/*
Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.

День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.

var date = new Date(2012, 0, 3);  // 3 янв 2012
alert( getLocalDay(date) );       // вторник, выведет 2
* * * */
let date = new Date();

function getLocalDay(date) {
  return (date.getDay() === 0)? 7: date.getDay();
}
console.log(getLocalDay(date))
