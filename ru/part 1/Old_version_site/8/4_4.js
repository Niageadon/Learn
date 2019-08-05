/*done


 Добавьте в холодильник методы:

Публичный метод filterFood(func), который возвращает всю еду, для которой func(item) == true
Публичный метод removeFood(item), который удаляет еду item из холодильника.
Код для проверки:

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  alert( item.title ); // сок, зелень
  fridge.removeFood(item);
});

alert( fridge.getFood().length ); // 2

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
    };
    this.filterFood = function(func){
        let result = [];
        _food.forEach((i)=>{
            if(func(i)) result.push(i)
        })
        return result
    };
    this.removeFood = function(item){
        for(let i = 0; i< _food.length; i++){
            if (item.title === _food[i].title) {
                _food.splice(i,1);
                break
            }
        }
    }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});
dietItems.forEach(function(item) {
    console.log(item)
    alert( item.title ); // сок, зелень
    fridge.removeFood(item);
});

alert( fridge.getFood().length ); // 2
