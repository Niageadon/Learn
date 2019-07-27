/* TODO: boba

В коде ниже создаётся простейшая иерархия классов: Animal -> Rabbit.

Что содержит свойство rabbit.constructor? Распознает ли проверка в alert объект как Rabbit?

function Animal() {}

function Rabbit() {}
Rabbit.prototype = Object.create(Animal.prototype);

var rabbit = new Rabbit();

alert( rabbit.constructor == Rabbit ); // что выведет?

*/

function Animal() {}

function Rabbit() {}
Rabbit.prototype = Object.create(Animal.prototype);

var rabbit = new Rabbit();

alert( rabbit.constructor == Rabbit ); // что выведет?
