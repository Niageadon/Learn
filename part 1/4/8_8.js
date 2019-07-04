/*
Напишите код, который отсортирует массив объектов people по полю age.

Например:

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

... ваш код ...

// теперь people: [vovochka, masha, vasya]
alert(people[0].age) // 6
Выведите список имён в массиве после сортировки.*/


let vasya = { name: "Вася", age: 23 };
let masha = { name: "Маша", age: 18 };
let vovochka = { name: "Вовочка", age: 6 };
let people = [ vasya , masha , vovochka ];

people.sort((a, b)=>{
  return a.age - b.age;
});
console.log(people);
