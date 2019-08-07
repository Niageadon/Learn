/*done
Когда кофеварку выключают – текущая варка кофе должна останавливаться.

Например, следующий код кофе не сварит:

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет
Реализуйте это на основе решения предыдущей задачи.

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
    this.disable = function () {
        enable = false;
        if(run){
            clearTimeout(run);
            console.log('Машина выключене во время работы')
        }
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
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет
