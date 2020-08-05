/*
Как добавить элемент в конец произвольного массива?

У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».
*/

let goods = [];
for(let i = 0; i < Math.ceil(Math.random() * 100); i++){
  goods.push(Math.random().toFixed(1));
}

goods.push('Компьютер');
console.log(goods);
