/*
Каким будет результат? Почему?

var arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?
*/

var arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?
console.log('Контекстом будет переменная arr - [a,b, function(){...}]');
console.log('Потому что this определяется в момент вызова функции и является объектов до точки.');
