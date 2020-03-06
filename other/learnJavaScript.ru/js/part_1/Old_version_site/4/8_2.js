/*
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть, дефисы удаляются, а все слова после них получают заглавную букву.

Например:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
Такая функция полезна при работе с CSS.

P.S. Вам пригодятся методы строк charAt, split и toUpperCase.
*/

function camelize(str){
  let a = str.split('-');
  let result = [];
  //console.log(a);
  for (let i = 0; i < a.length; i++){
    result.push(a[i][0].toUpperCase() + '' + a[i].slice(1));
    console.log(a.toString())
  }
  return result.join('')
}

let string = 'my-short-string';
console.log(camelize(string));
