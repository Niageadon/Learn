/*

Являются ли фрагменты кода ниже эквивалентными? Другими словами, ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков?

promise.then(f1).catch(f2);
Против:

promise.then(f1, f2);

* */
let promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve()
  },Math.random()*10);
  setTimeout(()=>{
    reject()
  },Math.random()*10)
})
//promise.then(()=>{console.log(1)}, ()=>{console.log(2)});

//promise.then(()=>{console.log(1)}).catch( ()=>{console.log(2)});
console.log('Нет. Если этот промис находится в цепочке, то они будут вести себя по разному.');
