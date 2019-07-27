/* done

Почему instanceof в коде ниже возвращает true, ведь объект a явно создан не B()?


function A() {}

function B() {}

A.prototype = B.prototype = {};

var a = new A();

alert( a instanceof B ); // true

*/

function A() {}

function B() {}

A.prototype = B.prototype = {};

var a = new A();

alert( a instanceof B ); // true
console.log('Потому что сравнивается obj.__proto__ с Constructor.prototype. А в данном примере протитипы кассов A и B являются одним и тем же объектом.');