/*
Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(), который будет очищать текущее содержимое буфера:












function makeBuffer() {
  ...ваш код...
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // ""
 */


function makeBuffer(){
  let buffer = [];

  function addToBuffer(value) {
    buffer.push(value);
    return buffer.join('')
  }

  addToBuffer.clear = function () {
    buffer = [];
  };
  return addToBuffer
}

let buffer = makeBuffer();

buffer('boba');
buffer('boba');

console.log(buffer('boba'));
buffer.clear();
console.log(buffer());
