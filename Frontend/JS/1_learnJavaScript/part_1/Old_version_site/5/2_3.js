/*
Каков будет результат выполнения этого кода? Почему?

function test() {

  alert( window );

  var window = 5;

  alert( window );
}

test();
* * * */

function test() {

  alert( window );

  var window = 5;

  alert( window );
}

test();

console.log('В строке "var window = 5;" мы создаём локальную переменную window.');
console.log('В первый вызов alert-а мы переменная ещё не определена, т.к. ей не присвоено значение.');
console.log('Во втором вызове выводится значение переменной - 5.');
