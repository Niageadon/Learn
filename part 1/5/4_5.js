/*
Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый, в который входят только те элементы arr, для которых func возвращает true.
Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]". Использование должно быть таким:
filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.
Пример, как это должно работать:

var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2
 */

function filter(arr, fun){
  let result = [];
 for (let i = 0; i < arr.length; i++){
     if(fun(arr[i])) result.push(arr[i])
  }
 return result
}

a = filter([1,2,3,4,5,6], function(a) {
  return a % 2 === 0
})

console.log(a)
