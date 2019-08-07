/*
Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.

Если объект пустой, то результат должен быть 0.

Например:

"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

//... ваш код выведет 650
P.S. Сверху стоит use strict, чтобы не забыть объявить переменные.
* */

let salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

function getSum(obj){
  let sum = 0;
  for (let i in obj){
    sum += obj[i]
  }
  return sum
}

console.log(getSum(salaries))
