/*
Улучшите готовый код кофеварки, который дан ниже: добавьте в кофеварку публичный метод stop(), который будет останавливать кипячение (через clearTimeout).

 function CoffeeMachine(power) {
  this.waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  var self = this;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    alert( 'Кофе готово!' );
  }

  this.run = function() {
    setTimeout(onReady, getBoilTime());
  };

}
Вот такой код должен ничего не выводить:

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop(); // кофе приготовлен не будет
P.S. Текущую температуру воды вычислять и хранить не требуется.

P.P.S. При решении вам, скорее всего, понадобится добавить приватное свойство timerId, которое будет хранить текущий таймер.



*
*/


function CoffeeMachine(power) {
    this.waterAmount = 0;

    let WATER_HEAT_CAPACITY = 4200;

    let self = this;
    let onWord;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        alert( 'Кофе готово!' );
    }

    this.run = function() {
        onWord = setTimeout(onReady, getBoilTime());
    };
    
    this.clear = function () {
        (onWord)? clearTimeout(onWord): console.log('Машина не работает');
    }

}

let boba = new CoffeeMachine(500000);
boba.waterAmount = 333;
boba.run();
boba.clear();