/*
В приведённом ниже коде создаются и изменяются два объекта.

Какие значения показываются в процессе выполнения кода?

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)
Должно быть 3 ответа.

* */

let animal = {
  jumps: null
};
let rabbit = {
  jumps: true,
  __proto__: animal,
};

alert( rabbit.jumps ); // ? (1)
console.log("true");
delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)
console.log("null");
delete animal.jumps;

alert( rabbit.jumps ); // ? (3)
console.log("undef");
