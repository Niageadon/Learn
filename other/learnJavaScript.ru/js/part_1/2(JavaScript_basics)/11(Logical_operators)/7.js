/*
Напишите условие if для проверки того факта, что age НЕ находится между 14 и 90 включительно.

Сделайте два варианта условия: первый с использованием оператора НЕ !, второй – без этого оператора.
*/

function getAnswer(value){
  return{
    first: !((14 <= value) && (value<= 90)),
    second: ((14 > value) && (value < 90))}
}

console.log(getAnswer(14));
console.log(getAnswer(13));
console.log(getAnswer(90));
console.log(getAnswer(91));
