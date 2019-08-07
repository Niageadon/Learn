/*
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

Например:

function unique(arr) {
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) ); // кришна, харе, 8-()
* */

function unique(arr) {
  let word = {};
  let answer = [];
  for (let i = 0; i< arr.length; i++){
    word[arr[i]] = true;
  }
  console.log(word);
  for(let i in word){
    answer.push(i);
  }
  console.log(answer);

}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];
unique(strings);
console.log( strings ); // кришна, харе, 8-()
