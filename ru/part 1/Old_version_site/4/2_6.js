/*
Напишите код для генерации случайного значения в диапазоне от 0 до max, не включая max.
*/

function randomNumber(maxValue){
  return Math.random() * maxValue
}
console.log(randomNumber(10));
