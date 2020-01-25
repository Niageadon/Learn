/*done

Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Например, должно работать так:

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
То есть, должны корректно передаваться аргументы.
*/

Function.prototype.defer = function (ms) {
    let cont = this;
    return function (a, b) {
        setTimeout(()=>{
            cont(a,b);
        }, ms)
    }
};
function f(a, b) {
    alert( a + b );
}

f.defer(6000)(1, 2); // выведет 3 через 1 секунду.