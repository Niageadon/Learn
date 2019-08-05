/*done
В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.

В итоге должен работать такой код:

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.run(); // ошибка, кофеварка выключена!
А вот так – всё в порядке:

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!


*
*/

function CoffeeMachine(power, capacity) {
    let waterAmount = 0;
    let run = false;
    let enable = false;
    let userOnReady = function(){
        alert( 'Кофе готов!' );
    };
    let WATER_HEAT_CAPACITY = 4200;
    let onReady = function onReady() {
        userOnReady();
    };

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        // ... проверки пропущены для краткости
        waterAmount = amount;
    };
    this.enable = function () {
        enable = true;
    };

    this.getWaterAmount = function(amount) {
        return waterAmount;
    };

    this.run = function() {
        if(enable){
        run = setTimeout(function () {
            run = null;
            onReady();
        }, getTimeToBoil());
        } else console.log('Машина выключена')
    };
    this.setOnReady = function (foo) {
        (typeof foo === "function")? userOnReady = foo: console.log('wtf')
    };
    this.isRunning = function(){
        return !!run
    }
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run(); // ...Кофе готов!
