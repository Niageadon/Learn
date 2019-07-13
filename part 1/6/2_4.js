/*
Подумайте, какой результат будет у выражений ниже. Когда закончите – сверьтесь с решением.

new Date(0) - 0
new Array(1)[0] + ""
({})[0]
[1] + 1
[1,2] + [3,4]
[] + null + 1
[[0]][0][0]
({} + {})
* **/

console.log('new Date(0) - 0            0');
console.log('new Array(1)[0] + ""       "undefined"');
console.log('({})[0]                    undefined');
console.log('[1] + 1                    "11"');
console.log('[1,2] + [3,4]              "1,23,4"');
console.log('[] + null + 1              "null1"');
console.log('[[0]][0][0]                0');
console.log('({} + {})                  "[object Object][object Object]"');

