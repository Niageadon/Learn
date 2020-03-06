/* TODO почему работает так?

Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

* */
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops1");
    }, 1000);
    throw new Error("Whoops2");
  }).catch(alert);

console.log('Ошибку обрабатывает ');
