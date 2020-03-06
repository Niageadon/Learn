/*
Напишите функцию formatDate(date), которая форматирует дату date так:

Если со времени date прошло менее секунды, то возвращает "только что".
Иначе если со времени date прошло менее минуты, то "n сек. назад".
Иначе если прошло меньше часа, то "m мин. назад".
Иначе полная дата в формате "дд.мм.гг чч:мм".
Например:

function formatDate(date) {  }

alert( formatDate(new Date(new Date - 1)) ); // "только что"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"
* * * */

let d = new Date(2019, 6, 7, 14, 1);

function formatDate(date) {
  let currentDate = new Date();
  let diff = ((currentDate - date)/1000);
  console.log('секунды', diff);
  console.log('минуты', diff/60);
  console.log('часы', diff/60/60);
  if (diff <= 1){
    return 'Только что'
  }
  if(diff <= 60){
    return `${diff.toFixed(0)} сек. назад`
  }
  if((diff / 60) <= 60){
    return `${(diff/60).toFixed(0)} мин. назад`
  }
  let day = (date.getDate().toString().length >= 2)? date.getDate(): '0' + date.getDate();
  let month = (date.getMonth().toString().length >= 2)? date.getMonth(): '0' + (date.getMonth() + 1);
  let year = date.getFullYear() % 100;
  let hour = (date.getHours().toString().length >=2)? date.getHours(): '0' + date.getHours();
  let minute = (date.getMinutes().toString().length >=2)? date.getMinutes(): '0' + date.getMinutes();
  return day + '.' + month + '.' + year + ' ' + hour + ':' + minute
}
console.log( formatDate(d));
