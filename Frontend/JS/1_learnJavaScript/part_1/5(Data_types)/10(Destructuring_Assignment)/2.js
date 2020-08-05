/*
У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

Открыть песочницу с тестами для задачи.
*/
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
console.log(topSalary(salaries));

function topSalary(salaries){
  let max = {value: null};
  for(let [key, value] of Object.entries(salaries)){
    if(value > max.value){
     max = {name: key, value}; 
    }
  }
  return max.name;
}