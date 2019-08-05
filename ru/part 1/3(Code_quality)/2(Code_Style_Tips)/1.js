/*
Какие недостатки вы видите в стиле этого примера?

function pow(x,n)
{
  var result=1;
  for(var i=0;i<n;i++) {result*=x;}
  return result;
}

x=prompt("x?",'')
n=prompt("n?",'')
if (n<0)
{
  alert('Степень '+n+'не поддерживается, введите целую степень, большую 0');
}
else
{
  alert(pow(x,n))
}
*/

let answer = function () {
  function pow(x, n){
    let result = 1;
    for (let i=0; i<n; i++) {
      result *= x;
    }
    return result;
  }

  let x = prompt ("x?", '');
  let n = prompt ("n?", '');
  (n < 0)? alert('Степень ' + n + 'не поддерживается, введите целую степень, большую 0'): alert(pow(x,n));
};

console.log('Исправленный вариант: ', answer);

