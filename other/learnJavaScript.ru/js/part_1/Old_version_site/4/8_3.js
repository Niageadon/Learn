/*
НУ объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:

var obj = {
  className: 'open menu'
};
Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)
P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

obj = {
  className: 'my menu menu'
};
removeClass(obj, 'menu');
alert( obj.className ); // 'my'
Лишних пробелов после функции образовываться не должно.
*/

let obj = {
  className: 'open menu menu ff menu ff'
};

function removeClass(obj, cls){
  let arr = obj.className.split(' ');
  let deleteIndex = [];
  for (let i = 0; i < arr.length; i++){
    if (cls === arr[i]) deleteIndex.push(i);
  }
  for (let i = 0; i< deleteIndex.length; i++){
    arr.splice(deleteIndex[i] - i,1)
  }
  obj.className = arr.join(' ')
}

removeClass(obj, 'menu');
console.log(obj);
