/*
Каков будет результат выполнения этого кода?

var value = 0;

function f() {
  if (1) {
    value = true;
  } else {
    var value = false;
  }

  alert( value );
}

f();
Изменится ли внешняя переменная value ?

P.S. Какими будут ответы, если из строки var value = false убрать var?
* * * */

var value = 0;

function f() {
  if (1) {
    value = true;
  } else {
    value = false;
  }

  alert( value );
}

f();
console.log('Каков будет результат выполнения этого кода? - Выведется значение "true".');
console.log('Изменится ли внешняя переменная value ? - Нет, не изменится.');
console.log(' Какими будут ответы, если из строки var value = false убрать var? - Тогда изменится ответ на предыдущий вопрос.');
