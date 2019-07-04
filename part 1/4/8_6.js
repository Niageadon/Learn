/*
Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.

Исходный массив не должен меняться.

var arr = ["HTML", "JavaScript", "CSS"];

// ... ваш код ...

alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

let arr = ["HTML", "JavaScript", "CSS"];
let newArr =  arr.concat().sort((a, b)=>{
  return Math.random() - 0.5
})
console.log(arr)
console.log(newArr)
