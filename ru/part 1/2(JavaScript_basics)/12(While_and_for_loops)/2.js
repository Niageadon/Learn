/*
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

Префиксный вариант

var i = 0;
while (++i < 5) alert( i );
Постфиксный вариант

var i = 0;
while (i++ < 5) alert( i );
*/

console.group("Первый вариант");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.groupEnd();

console.group("Второй вариант");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.groupEnd();
