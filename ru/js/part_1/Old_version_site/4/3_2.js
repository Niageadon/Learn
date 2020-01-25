/*
Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

function checkSpam(str){
  let spam = ['viagra', 'xxx'];
  for(let i of spam){
    if (str.toLowerCase().indexOf(i) !== -1) return true
  }
  return false
}
console.log(checkSpam('dsxxxXXX'));
