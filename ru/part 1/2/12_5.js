/*
Перепишите if с использованием оператора '?':

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
*/

function getResult(a, b){
  return (a + b < 4)? 'Мало': 'Много'
}

console.log(getResult(1,2));
console.log(getResult(1,4));
