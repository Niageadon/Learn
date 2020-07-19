/*
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
*/
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };  
alert( sumSalaries(salaries) ); // 650

function sumSalaries(obj){
    let values = Object.values(obj);
    let summ = 0;
    console.log(values);
    for(item of values){
        summ += item;
    }
    return summ
}