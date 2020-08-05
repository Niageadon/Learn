/*
Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.

Например:

alert( isInteger(1) ); // true
alert( isInteger(1.5) ); // false
alert( isInteger(-0.5) ); // false
*/

function isInteger(num){
  let ceil = ~~num;
  return (ceil === num)
}

console.log(isInteger(1));
console.log(isInteger(1.5));
