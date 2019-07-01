/*
Напишите код для генерации случайного числа от min до max, не включая max.
*/

function randomNumber(minValue, maxValue){
  return  minValue + Math.random() * (maxValue - minValue)
}
console.log(randomNumber(1, 2));
