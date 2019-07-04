/*
Односвязный список – это структура данных, которая состоит из элементов, каждый из которых хранит ссылку на следующий. Последний элемент может не иметь ссылки, либо она равна null.

Например, объект ниже задаёт односвязный список, в next хранится ссылка на следующий элемент:

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Графическое представление этого списка:

Альтернативный способ создания:

var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
Такая структура данных интересна тем, что можно очень быстро разбить список на части, объединить списки, удалить или добавить элемент в любое место, включая начало. При использовании массива такие действия требуют обширных перенумерований.

Задачи:

Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
Напишите функцию printList(list) при помощи рекурсии.
Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.
Как лучше – с рекурсией или без?*/

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

function getTime(fun, argument){
  let time = performance.now();
  console.log(fun)
  for(let i = 0; i < 10000; i++){
    fun(argument);
  }
  time = performance.now() - time;
  console.log('Время выполнения функции = ' , time);
}
function printList(list){
  // решение, используя цикл
  let temp = list;
  while(temp.next){
    //console.log(temp.value);
    temp = temp.next;
  }
}
function printList1(list){
  // решение, основанное на рекурсию
  //console.log(list.value);
  if (list.next) {
    printList1(list.next)
  }
}
function printReverseList(list){
  if (list.next) {
    printReverseList(list.next)
  }
  //console.log(list.value);
}
function printReverseList1(list){
  let temp = list;
  let arr = [list.value];
  while(temp.next){
    //console.log(temp.value);
    temp = temp.next;
    arr.push(temp.value)

  }
  for (let i = arr.length - 1; i >= 0; i--){
    //console.log(arr[i])
  }
}


getTime(printList, list);
getTime(printList1, list);
getTime(printReverseList, list);
getTime(printReverseList1, list);

console.log('Функции вывода результата закоментированы');
console.log('Как видно из резальтатов, для данной задачи рекурсивный подход более эффективен');
