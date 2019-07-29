/*
Как в функции отличить отсутствующий аргумент от undefined?

function f(x) {
  // ..ваш код..
  // выведите 1, если первый аргумент есть, и 0 - если нет
}

f(undefined); // 1
f(); // 0
* * */

function f(x) {
  arguments.length? console.log(1): console.log(0);
}

f(1);
f();
