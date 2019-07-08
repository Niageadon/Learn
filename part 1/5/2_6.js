/*
Что выведут эти вызовы, если переменная currentCount находится вне makeCounter?
var currentCount = 1;

function makeCounter() {
  return function() {
    return currentCount++;
  };
}

var counter = makeCounter();
var counter2 = makeCounter();

alert( counter() ); // ?
alert( counter() ); // ?

alert( counter2() ); // ?
alert( counter2() ); // ?
}* * * */

var currentCount = 1;

function makeCounter() {
  return function() {
    return currentCount++;
  };
}

var counter = makeCounter();
var counter2 = makeCounter();

alert( counter() ); // ?
alert( counter() ); // ?

alert( counter2() ); // ?
alert( counter2() ); // ?

console.log('Счётчики не будут уникальными. Каждый вызов будет инкрементировать "общую" перемннную');

