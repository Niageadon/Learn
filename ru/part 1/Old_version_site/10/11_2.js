/* TODO

Есть массив URL:

 'use strict';

let urls = [
  'user.json',
  'guest.json'
];
Напишите код, который все URL из этого массива загружает один за другим (последовательно) и сохраняет результаты в массиве results, а потом выводит.

Вариант с параллельной загрузкой выглядел бы так:

Promise.all( urls.map(httpGet) )
  .then(alert);
В этой задаче загрузку нужно реализовать последовательно.

* */
'use strict';


let urls = [
  'user.json',
  'guest.json'
];

function boba(){
  return new Promise((resolve, reject) => {

  })
}

Promise.all( urls.map(httpGet) )
  .then(alert);




function httpGet(url) {

  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });

}
