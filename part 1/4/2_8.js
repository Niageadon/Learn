/*
Напишите функцию randomInteger(min, max) для генерации случайного целого числа между min и max, включая min,max как возможные значения.

Любое число из интервала min..max должно иметь одинаковую вероятность.
*/

function randomInteger(minValue, maxValue){
  let answer = {value: 0, index: 0};
  let value;
  for (let i = minValue; i <= maxValue; i++){
    value = Math.random();
    if (answer.value < value) {
      answer.value = value;
      answer.index = i;
    }
  }
  return answer.index
  //return  Math.round(minValue + Math.random() * (maxValue - minValue))
}



var time = performance.now();
for(let i = 0; i<1000; i++){
  randomInteger(1, 3333);
}
time = performance.now() - time;
console.log(time)

var time1 = performance.now();
for(let i = 0; i<1000; i++){
  randomInteger1(1, 3333);
}
time1 = performance.now() - time1;
console.log(time1)
