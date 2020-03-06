/*
Что выведет функция?

function f() {
  alert( this );
}

var user = {
  g: f.bind("Hello")
}

user.g();
*/

console.log('Выведет алерт:"Hello"');
