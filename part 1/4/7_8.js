/*
СЦелое число, большее 1, называется простым, если оно не делится нацело ни на какое другое, кроме себя и 1.

Древний алгоритм «Решето Эратосфена» для поиска всех простых чисел до n выглядит так:

Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
Пусть p=2, это первое простое число.
Зачеркнуть все последующие числа в списке с разницей в p, т.е. 2*p, 3*p, 4*p и т.д. В случае p=2 это будут 4,6,8....
Поменять значение p на первое не зачеркнутое число после p.
Повторить шаги 3-4 пока p2 < n.
Все оставшиеся не зачеркнутыми числа – простые.
Посмотрите также анимацию алгоритма.

Реализуйте «Решето Эратосфена» в JavaScript, используя массив.

Найдите все простые числа до 100 и выведите их сумму.
*/
let maxLen = 5555;
let arr = [];
let answer = [1, 2];
let p = answer[answer.length - 1];

for (let i = 0; i < maxLen; i++){
  arr.push(true)
}
arr[0] = arr[1] = arr[2] = false;


do{
  for (let i = p; i < maxLen; i += p){
    arr[i] = false;
  }
  for(let i = answer[answer.length - 1]; i < maxLen; i++){
    if(arr[i]) {
      answer.push(i);
      p = i;
      arr[i] = false;
      break;
    }
  }
}while (p**2 <= maxLen);

let sum = 0;
for(let i = 0; i < answer.length; i++){
  sum += answer[i];
}

console.log('Ищем простые числа до: ', maxLen);
console.log('Простые числа: ',answer);
console.log('Сумма простых чисел: ', sum);
