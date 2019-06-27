/*
Напишите условие if для проверки того факта, что переменная age находится между 14 и 90 включительно.

«Включительно» означает, что концы промежутка включены, то есть age может быть равна 14 или 90.
*/

function getAnswer(value){
  return ((14 <= value) && (value<= 90))
}

console.log(getAnswer(14));
console.log(getAnswer(13));
console.log(getAnswer(90));
console.log(getAnswer(91));
