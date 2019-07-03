/*
Как получить последний элемент из произвольного массива?

У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.

Напишите код для получения последнего элемента goods.
*/

let goods = [];
for(let i = 0; i < Math.ceil(Math.random() * 100); i++){
  goods.push(Math.random().toFixed(1));
}

let len = goods.length;
console.log(goods);
console.log(goods[len - 1])
