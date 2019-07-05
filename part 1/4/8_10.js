/*
Анаграммы – слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:

воз - зов
киборг - гробик
корсет - костер - сектор
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/

let arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function aclean(arr){
  let word;
  for (let i = 0; i < arr.length; i++){
    word = arr[i].toLowerCase().split('').sort();
    for (let j = 0; j < arr.length - i; j++){
      if (arr[i+1]){
        console.log(arr[i+1].toLowerCase().split('').sort().join(''), word.join(''));
        if (arr[i+1].toLowerCase().split('').sort().join('') === word.join('')){
          arr.splice(i+1, 1);
          i--;
        }
      }
    }
  }
}

aclean(arr);
console.log(arr);
