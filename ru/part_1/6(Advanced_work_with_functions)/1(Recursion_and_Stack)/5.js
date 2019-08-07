/* TODO

Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.

* */

let list = {
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

printList(list);
printList_(list);

function printList(list) {
  if(list.next){
    printList(list.next);
  }
  console.log('рекурсия: ', list.value);
}

function printList_(list) {
  let array = [];
  let currentList = list;
  while (currentList){
    array.unshift(currentList.value);
    currentList = currentList.next;
  }
  for(i of array){
    console.log('цикл: ', i)
  }
}

console.log('В этом примере преимущества рекурсии перед цикла очевидно.');