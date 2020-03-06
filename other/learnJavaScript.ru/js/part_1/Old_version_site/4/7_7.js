/*
Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, который содержит только числа из arr из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.

Пример работы:

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
// теперь filtered = [5, 4, 3]
// arr не изменился
*/

arr = [1, 2, 5, 9, 11, 1 , 3];
function filterRange(arr, a, b){
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] <= a || arr[i] >= b ) continue;
    newArr.push(arr[i])
  }
  return newArr
}
console.log(filterRange(arr, 1, 9));
