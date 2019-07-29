/*
Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.

Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
* * * */

function getSecondsToday() {
  let currentTime = new Date(); // нулевой день следующего месяца = последний день текущего
  let temp = new Date();
  temp.setHours(0);
  temp.setMinutes(0);
  temp.setSeconds(0);
  temp.setMilliseconds(0);
  return((currentTime - temp)/1000)
}

console.log( getSecondsToday());
