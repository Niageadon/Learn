/*
ККаков будет результат выполнения кода? Почему?

var a = 5

(function() {
  alert(a)
})()
P.S. Подумайте хорошо! Здесь все ошибаются! P.P.S. Внимание, здесь подводный камень! Ок, вы предупреждены.
* * * */

//var a = 5

(function() {
  //alert(a)
})()

console.log('Результатом будет ошибка, т.к. после объявления переменной пропущенна ";".');
console.log('Интерпретатор, будет пытаться вызвать функцию 5(function() {\n' + '  alert(a)\n' + '})()');
