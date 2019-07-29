/*
Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:

sum() = 0
sum(1) = 1
sum(1, 2) = 3
sum(1, 2, 3) = 6
sum(1, 2, 3, 4) = 10
* * * */

function sum(x) {
  let answer = 0;
  for (let i of arguments){
    answer += i;
  }
  return answer
}

console.log(sum(1, 2, 3));
