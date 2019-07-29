/*
Напишите функцию sum, которая будет работать так:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
Количество скобок может быть любым.

Пример такой функции для двух аргументов – есть в решении задачи Сумма через замыкание.
* **/

function sum(a) {
  let result = a;

  boba.toString = function() {
    return +result
  };
  boba.valueOf = result;
  function boba(b){
    if (b === undefined) {
      return result
    }
    result +=  b;
    return boba
  }
  return boba;
}
let a = sum(1)(2)(3)(5);
console.log(a)
