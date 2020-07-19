/*

Добавить в конструктор Article:

Подсчёт общего количества созданных объектов.
Запоминание даты последнего созданного объекта.
Используйте для этого статические свойства.

Пусть вызов Article.showStats() выводит то и другое.

Использование:
function Article() {
  this.created = new Date();
  // ... ваш код ...
}

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)


*/

function Article() {
  this.count++;
  this.created = new Date();
  // ... ваш код ...
  this.showStats = function () {
  return 1
  }
}

let a = new Article();
let b = new Article();
new Article();
console.log(a);
console.log(b);
console.log(a.showStats()); // Всего: 2, Последняя: (дата)

new Article();

