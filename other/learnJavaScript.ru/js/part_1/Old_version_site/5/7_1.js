/*
Какая из функций будет вызвана?

function f() {
  alert(1)
}

var obj = {
  f: function() {
    alert(2)
  }
};

with(obj) {
  f();
}
 */

console.log('"2", т.к. любое обращение к переменной внутри with сначала ищет её среди свойств obj, а только потом – вне with.')
