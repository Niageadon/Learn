/*

Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

function delay(ms) {
  // ваш код
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));

* */

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve();
    }, ms)
  })
}

console.log(1);
delay(900).then(()=>{
  console.log(2);
})
