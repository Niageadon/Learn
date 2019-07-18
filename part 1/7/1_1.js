/*
 Напишите функцию formatDate(date), которая возвращает дату в формате dd.mm.yy.

Ее первый аргумент должен содержать дату в одном из видов:

Как объект Date.
Как строку, например yyyy-mm-dd или другую в стандартном формате даты.
Как число секунд с 01.01.1970.
Как массив [гггг, мм, дд], месяц начинается с нуля
Для этого вам понадобится определить тип данных аргумента и, при необходимости, преобразовать входные данные в нужный формат.

Пример работы:

function formatDate(date) {  }

alert( formatDate('2011-10-02') ); // 02.10.11
alert( formatDate(1234567890) ); // 14.02.09
alert( formatDate([2014, 0, 1]) ); // 01.01.14
alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14


*/

function formatDate(date) {
  let dateType = '';
  if (date.getDate){ dateType = 'Date'}
  else if (typeof date === 'string'){dateType = 'String'}
  else if (typeof date === 'number'){ dateType = 'Number'}
  else if (Array.isArray(date)){ dateType = 'Array'}

  switch (dateType) {
    case "Date":{
    }
    case "String":{
      let split = date.split('-');
      return split[2] + '.' + split[1] + '.' + split[0].slice(2,4);
    }
    case "Number":{
    let d = new Date(date);
    return (d)
    }
    case "Array":{}
  }

}

console.log( formatDate('2011-10-02') ); // 02.10.11
console.log( formatDate(1234567890) ); // 14.02.09
console.log( formatDate([2014, 0, 1]) ); // 01.01.14
console.log( formatDate(new Date(2014, 0, 1)) ); // 01.01.14
