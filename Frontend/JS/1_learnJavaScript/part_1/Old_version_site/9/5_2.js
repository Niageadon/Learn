/* done

Найдите ошибку в прототипном наследовании. К чему она приведёт?

 function Animal(name) {
  this.name = name;

  this.walk = function() {
    alert( "ходит " + this.name );
  };

}

function Rabbit(name) {
  Animal.apply(this, arguments);
}
Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.walk = function() {
  alert( "прыгает " + this.name );
};

var rabbit = new Rabbit("Кроль");
rabbit.walk();

*/
console.log('Написав Animal.apply в теле класс, мы отнаследовали методы Animal.');
console.log('Написав Animal.apply в теле класс, мы отнаследовали методы как собственные(не в __proto__).');
console.log('Поэтому дальнеешая попытка "переопределения" метода не имеет смысла, ибо она работает с прототипом.');
function Animal(name) {
    this.name = name;
    this.walk = function() {
        alert( "ходит " + this.name );
    };
}

function Rabbit(name) {
    Animal.apply(this, arguments);
}
Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.walk = function() {
    alert( "прыгает " + this.name );
};

var rabbit = new Rabbit("Кроль");
rabbit.walk();
console.log(rabbit)
