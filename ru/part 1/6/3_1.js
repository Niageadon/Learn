/*
Возможны ли такие функции A и B в примере ниже, что соответствующие объекты a,b равны (см. код ниже)?

function A() { ... }
function B() { ... }

var a = new A;
var b = new B;

alert( a == b ); // true
Если да – приведите пример кода с такими функциями.* **/

console.log('Объекты будут равны, если сравнивается один и тот же объект.');

let boba = {a: 1};
function A() {
  return boba
}
function B() {
  return boba
}

var a = new A;
var b = new B;

console.log( a == b ); // true
console.log(a, b)
