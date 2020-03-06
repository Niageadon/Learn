/*done В решении на сайте условие по "Публичный метод getFood() возвращает еду в виде массива, добавление или удаление элементов из
 которого не должно влиять на свойство food холодильника." не выполнено


 Создайте класс для холодильника Fridge(power), наследующий от Machine, с приватным свойством food и методами addFood(...), getFood():

Приватное свойство food хранит массив еды.
Публичный метод addFood(item) добавляет в массив food новую еду, доступен вызов с несколькими аргументами addFood(item1, item2...) для добавления нескольких элементов сразу.
Если холодильник выключен, то добавить еду нельзя, будет ошибка.
Максимальное количество еды ограничено power/100, где power – мощность холодильника, указывается в конструкторе. При попытке добавить больше – будет ошибка
Публичный метод getFood() возвращает еду в виде массива, добавление или удаление элементов из которого не должно влиять на свойство food холодильника.
Код для проверки:

var fridge = new Fridge(200);
fridge.addFood("котлета"); // ошибка, холодильник выключен
Ещё код для проверки:

// создать холодильник мощностью 500 (не более 5 еды)
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "зелень");
fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды
Код использования холодильника без ошибок:

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье
Исходный код класса Machine, от которого нужно наследовать:

function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

*
*/

function Machine(power) {
    this._power = power;
    this._enabled = false;
    this._capacity = power / 100;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

function Fridge(power) {
    Machine.call(this, power);
    let _food = [];

    this.addFood = function (...items) {
        items.forEach((item)=>{
            if(_food.length < this._capacity) {_food.push(item)}
            else {throw new Error("wtf")}
        })
    };
    this.getFood = function () {
        return [..._food];
    }
}

// создать холодильник мощностью 500 (не более 5 еды)
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

 let a = fridge.getFood();

