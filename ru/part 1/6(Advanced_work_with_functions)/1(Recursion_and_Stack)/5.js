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

function printList(list) {
  if(list.next){
    printList(list.next);
  }
  console.log(list.value);
}

function printList_(list) {
  let currentList = list;
  while (currentList){
    console.log(currentList.value);
    currentList = currentList.next;
  }
}
