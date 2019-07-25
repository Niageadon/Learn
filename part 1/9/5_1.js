/* done

Найдите ошибку в прототипном наследовании. К чему она приведёт?

function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  alert( "ходит " + this.name );
};

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = Animal.prototype;

Rabbit.prototype.walk = function() {
  alert( "прыгает! и ходит: " + this.name );
};

*/

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function() {
    alert( "ходит " + this.name );
};


function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype = Animal.prototype;

Rabbit.prototype.walk = function() {
    alert( "прыгает! и ходит: " + this.name );
};

let an = new Animal('boba');
let ra = new Animal('biba');

an.walk();
ra.walk();
console.log('В строке "Rabbit.prototype = Animal.prototype;" мы "объеденили прототипы классов"');
console.log('А дальше переопределили метож walk. Метот будет общим для обоих классов"');

