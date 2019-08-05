/*

Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, чтобы она возвращала промис,
вместо того чтобы принимать в аргументы функцию-callback.

Новое использование:

showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});

* */
function showCircle(cx, cy, radius) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  setTimeout(() => {
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';

    div.addEventListener('transitionend', function handler() {
      div.removeEventListener('transitionend', handler);
      return new Promise((resolve, reject)=>{
        resolve();
      })
    });
  }, 0);
}

showCircle(111,222, 55).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});;
