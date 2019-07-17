/*
Что выведет этот код?

function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();





*/

console.log('Первый bind возвращает тело функции, поэтому второй bind не сработает');
console.log('Выведет "Вася"');
function f() {
  alert(this.name);
}
f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();
