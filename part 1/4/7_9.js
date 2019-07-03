/*
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача – найти непрерывный подмассив arr, сумма элементов которого максимальна.

Ваша функция должна возвращать только эту сумму.

Например:
getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (неотрицательные - берем всех)
Если все элементы отрицательные, то не берём ни одного элемента и считаем сумму равной нулю:

getMaxSubSum([-1, -2, -3]) = 0
Постарайтесь придумать решение, которое работает за O(n2), а лучше за O(n) операций.*/

let arr = [-1, 2, 3, -9, 11, 2, -1, 14, -2, 100];

function getMax(){
  let answer = 0;
  let temp = 0;
  for (let i = 0; i < arr.length; i++){
    temp += arr[i];
    answer = Math.max(answer, temp);
    if (temp < 0) temp = 0;
  }
  return answer
}


let time = performance.now();
// некий код
console.log(getMax(arr));
time = performance.now() - time;
console.log('Время выполнения = ', time);
