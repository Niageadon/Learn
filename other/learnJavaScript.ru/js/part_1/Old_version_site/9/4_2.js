/* done

Вы – руководитель команды, которая разрабатывает игру, хомяковую ферму. Один из программистов получил задание создать класс «хомяк» (англ – "Hamster").

Объекты-хомяки должны иметь массив food для хранения еды и метод found для добавления.

Ниже – его решение. При создании двух хомяков, если поел один – почему-то сытым становится и второй тоже.

В чём дело? Как поправить?

 function Hamster() {}

Hamster.prototype.food = []; // пустой "живот"

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert( speedy.food.length ); // 2
alert( lazy.food.length ); // 2 (!??)

*/

console.log('Дело в том, что обявляли свойство для класса через prototype.');
console.log('В этом случае поля у созданных экземляров будут общими.');
console.log('Ниже приведена исправленная версия кода.');
function Hamster() {
    this.food = [];
    this.found = function (something) {
        this.food.push(something);
    }
}


// Создаём двух хомяков и кормим первого
let speedy = new Hamster();
let lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert( speedy.food.length ); // 2
alert( lazy.food.length ); // 2 (!??)
