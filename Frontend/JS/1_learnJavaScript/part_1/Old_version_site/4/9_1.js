/*
Код ниже получает из массива строк новый массив, содержащий их длины:

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}

alert( arrLength ); // 4,5,2,5
Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.
* */

let arr = ["Есть", "жизнь", "на", "Марсе"];

let arrLength = arr.map((name)=>{
  return name.length
})

console.log(arrLength);
