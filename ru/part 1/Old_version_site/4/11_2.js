/*
Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.

Например:

var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // Должно вывести 'вт'
* * * */
let date = new Date()

function getWeekDay(date) {
  switch (date.getDay()){
    case 0: {return 'вс'}
    case 1: {return 'пн'}
    case 2: {return 'вт'}
    case 3: {return 'ср'}
    case 4: {return 'чт'}
    case 5: {return 'пт'}
    case 6: {return 'сб'}
  }
}
console.log(getWeekDay(date))
