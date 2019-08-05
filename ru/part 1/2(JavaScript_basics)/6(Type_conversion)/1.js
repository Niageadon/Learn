/*

Какой результат будет у выражений ниже?

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
Подумайте как следует. Когда закончите – сверьтесь с решением.

* */

console.group('Answer');
console.log('"" + 1 + 0\t\t\t', 10);
console.log('"" - 1 + 0\t\t\t', -1);
console.log('true + false\t\t', 1);
console.log('6 / "3"\t\t\t\t', 2);
console.log('"2" * "3"\t\t\t', 6);
console.log('4 + 5 + "px"\t\t', '9px');
console.log('"$" + 4 + 5\t\t\t', '$45');
console.log('"4" - 2\t\t\t\t', 2);
console.log('"4px" - 2\t\t\t', NaN);
console.log('7 / 0\t\t\t\t', 'inf');
console.log('"  -9  " + 5\t\t', '-9 5');
console.log('"  -9  " - 5\t\t', -14);
console.log('null + 1\t\t\t', 1);
console.log('undefined + 1\t\t', NaN);
console.groupEnd();
