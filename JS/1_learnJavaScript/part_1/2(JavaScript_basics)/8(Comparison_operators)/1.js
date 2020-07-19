/*

Каким будет результат этих выражений?

5 > 4
"ананас" > "яблоко"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"

* */

console.group('Answer\t\t\t\t\t\t', 'Result');
console.log('5 > 4\t\t\t\t\t\t', true);
console.log('"ананас" > "яблоко"\t\t\t', false);
console.log('"2" > "12"\t\t\t\t\t', true);
console.log('undefined == null\t\t\t', true);
console.log('undefined === null\t\t\t', false);
console.log('null == "\\n0\\n"\t\t\t\t', false);
console.log('null === +"\\n0\\n"\t\t\t', false);
console.groupEnd();
