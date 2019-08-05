/*

Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.

Пример использования:

delay(1000)
  .then(() => alert("Hello!"))
Такая функция полезна для использования в других промис-цепочках.

Вот такой вызов:

return new Promise((resolve, reject) => {
  setTimeout(() => {
    doSomeThing();
    resolve();
  }, ms)
});
Станет возможным переписать так:

return delay(ms).then(doSomething);


* */
function delay(ms){
return new Promise((resolve, reject)=>{
  setTimeout(resolve, ms)
})
}

delay(2000)
  .then(() => alert("Hello!"));
