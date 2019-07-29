/*done

Переопределите метод disable холодильника, чтобы при наличии в нём еды он выдавал ошибку.

Код для проверки:

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда



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
    let oldDisable = this.disable;
    this.disable = function () {
        if(_food.length) throw "В холадосе ещё есть еда";
        else oldDisable();
    };
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
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда
