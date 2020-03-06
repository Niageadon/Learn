/*
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};
*/
let user = {
    name: "Василий Иванович",
    age: 35
};
let json = JSON.stringify(user);
console.log(json);
let boba = JSON.parse(json);
console.log(boba);
