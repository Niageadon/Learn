/*
На входе массив чисел, например: arr = [1,2,3,4,5].

Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.

Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на
каждой позиции должна быть сумма элементов arr до этой позиции включительно.

То есть:

для arr = [ 1, 2, 3, 4, 5 ]
getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].

Функция не должна модифицировать входной массив.
В решении используйте метод arr.reduce.
Открыть песочницу с тестами для задачи.
* */

let arr = [1, 2, 3, 4, 5];

function getSums(arr){
  let answer = [];
  answer.push(arr.reduce((previousValue, currentItem, index)=>{
    //(index === 1)? boba.push(previousValue):
      answer.push(previousValue)
    console.log(previousValue, currentItem, index)
    return currentItem
  }));
  return answer
}

console.log(getSums(arr))
