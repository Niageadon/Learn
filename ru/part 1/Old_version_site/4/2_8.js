/*
Напишите функцию randomInteger(min, max) для генерации случайного целого числа между min и max, включая min,max как возможные значения.

Любое число из интервала min..max должно иметь одинаковую вероятность.
*/

function randomInteger(minValue, maxValue){
  return  Math.round(minValue + Math.random() * (maxValue - minValue))
}

function stat(fun, startValue, endValue) {
  let answer = {value: 0, 1: 0, 2: 0, 3: 0, 4: 0};
  for(let i = 0; i < 1000; i++) {
    answer.value = fun(startValue, endValue);
    answer[answer.value]++;
  }
  console.log('Статистика по ответам: ', answer);
}

stat(randomInteger,1, 4);
console.log('Как видно выше, простое округление Math.round работает так, что вероятность для первого и последного значений вдвое меньше чем для иных.');
console.log('Реализуем ту же функцию, используя Math.floor');
console.log('--------------------------------------------------------------');

function randomInt(minValue, maxValue){
  let value = minValue + (Math.random() * (maxValue + 1 - minValue));
  return  Math.floor(value);
}

stat(randomInt,1, 4);
console.log('Результат корректный');
