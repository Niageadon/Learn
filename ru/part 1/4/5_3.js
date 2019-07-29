/*
Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

Если объект пустой, то пусть он выводит «нет сотрудников».

Например:

"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

// ... ваш код выведет "Петя"
 */

let salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

function getMax(obj) {
  let maxValue = null;
  let name = null;
  for (let i in obj){
    if (maxValue < obj[i]) {
      maxValue = obj[i];
      name = i;
    }
  }
  return (maxValue === null)?  'нет сотрудников': {maxValue, name};
}

console.log(getMax(salaries));
