/*
Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
* * * */

function getSecondsToTomorrow() {
  let currentTime = new Date();
  let temp = new Date(currentTime.getFullYear(),currentTime.getMonth(),currentTime.getDate() + 1);
  return((temp - currentTime)/1000)
}

console.log( getSecondsToTomorrow());
