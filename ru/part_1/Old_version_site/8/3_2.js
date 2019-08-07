/*done
Добавьте кофеварке геттер для приватного свойства power, чтобы внешний код мог узнать мощность кофеварки.

Исходный код:

function CoffeeMachine(power, capacity) {
  //...
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.getWaterAmount = function() {
    return waterAmount;
  };

}
Обратим внимание, что ситуация, когда у свойства power есть геттер, но нет сеттера – вполне обычна.

Здесь это означает, что мощность power можно указать лишь при создании кофеварки и в дальнейшем её можно прочитать, но нельзя изменить.


*
*/


function CoffeeMachine(power, capacity) {

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

    this.power = function () {
        return power
    }
}

let boba = new CoffeeMachine(1200);
alert(boba.power());