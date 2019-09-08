/* Задача 1
// Реализовать функцию, которая находит разницу в массивах и возвращает ее
// Порядрк возвращаемых элментов не важен

function arrayDifference(arr1, arr2) {
  
}

arrayDifference(['javascript', 'is', 'awesome'], ['javascript', 'awesome'])
// ['is']
arrayDifference([1, 2, 3, 4, 5], [3, 4, 2, 7])
// [1, 5, 7]
*/

function arrayDifference(arr1, arr2) {
  let match = [];
  let result = [];
  let flag;
  // Находим совпадающие элементы
  for(let i = 0; i < arr1.length; i++){
      flag = false
      for(let j = 0; j < arr2.length; j++){
          console.log(i, arr1[i], arr2[j], arr1[i] === arr2[j])
          if (arr1[i] === arr2[j]) flag = true;
          if(!flag && (j === arr2.length - 1))result.push(arr1[i])
      }
  }
  for(let i = 0; i < arr2.length; i++){
    flag = false
    for(let j = 0; j < arr1.length; j++){
        if (arr2[i] === arr1[j]) flag = true;
        if(!flag && (j === arr1.length - 1))result.push(arr2[i])
    }
}
  

  console.log(result);

}

arrayDifference(['javascript', 'is', 'awesome'], ['javascript', 'awesome'])
// ['is']
arrayDifference([1, 2, 3, 4, 5], [3, 4, 2, 7])
// [1, 5, 7]