/*
Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:

// до вызова
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
P.S. Для проверки на число используйте функцию:

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
*/

function multiplyNumeric(obj) {
  let answer = {};
  for (let i in obj){
    answer[i] = (isNumeric(obj[i]))?  obj[i] * 2: obj[i];
  }
  return answer
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(multiplyNumeric(menu));


