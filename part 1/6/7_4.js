/*
В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;
alert( sayHi.test ); // 5

var bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // что выведет? почему?




*/

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;
alert( sayHi.test ); // 5

var bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // что выведет? почему?

console.log('Мы передаём новый контекст, в котором нету поля "test", результат - undefined');
