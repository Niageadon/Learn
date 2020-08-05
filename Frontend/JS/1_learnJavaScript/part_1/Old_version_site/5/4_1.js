/*
Напишите функцию sum, которая работает так: sum(a)(b) = a+b.

Да, именно так, через двойные скобки (это не опечатка). Например:

sum(1)(2) = 3
sum(5)(-1) = 4
* * * */

function sum(a){
  return function (b) {
    return a + b
  }
}

console.log(sum(10)(11));

