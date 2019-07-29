/*
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

Постфиксная форма:

for (var i = 0; i < 5; i++) alert( i );
Префиксная форма:

for (var i = 0; i < 5; ++i) alert( i );
*/

console.group("Первый вариант");
console.log("0");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.groupEnd();

console.group("Второй вариант");
console.log("0");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.groupEnd();
console.log("Инкрементация вызывается после тела цикла, так что тип постфикс или префикс - не важно");
