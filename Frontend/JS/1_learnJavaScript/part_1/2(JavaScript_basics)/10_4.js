/*
Почему результат второго alert'а такой странный?

 alert( 123456789 ^ 0 ); // 123456789
alert( 12345678912345 ^ 0 ); // 1942903641
*/

alert( 123456789 ^ 0 ); // 123456789
alert( 12345678912345 ^ 0 ); // 1942903641

let val = 12345678912345;
val = val.toString(2);
console.log("Побитовые операции работают с 32-разрядыми числами, приводя, при необходимости к этому виду. Это мы и наблюдаем в примере.");
console.log("Часть числа отбрасыается. Максимальное 'безопасное' число для таких операций: (2**31 - 1)");
console.log("-----------------------------------------------------------------------------------------");
console.log('длина в битах числа 12345678912345: ', val.length);
