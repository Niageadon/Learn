/*
В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:

var obj = {
  className: 'open menu'
}
Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"
P.S. Ваша функция не должна добавлять лишних пробелов.
*/

let obj = {
  className: 'open menu'
};

function ddClass(obj, cls){
  let arr = obj.className.split(' ');
  for (let i = 0; i < arr.length; i++){
    if(arr[i] === cls) {
      console.log('класс уже существует');
      return;
    }
  }
  arr.push(cls);
  obj.className = arr.join(' ')
}
ddClass(obj, 'boba');
ddClass(obj, 'boba');
ddClass(obj, 'biba');
console.log(obj);
