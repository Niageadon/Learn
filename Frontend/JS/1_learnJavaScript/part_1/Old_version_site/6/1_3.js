/*
Вызовы (1) и (2) в примере ниже работают не так, как (3) и (4):

 "use strict"

var obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();            // (1) object

(obj.go)();          // (2) object

(method = obj.go)();      // (3) undefined

(obj.go || obj.stop)(); // (4) undefined
В чём дело? Объясните логику работы this.
*/

"use strict"

var obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();            // (1) object

(obj.go)();          // (2) object

(method = obj.go)();      // (3) undefined
console.log('this - контекст выполнения. Тут его нету, потому - undef')
(obj.go || obj.stop)(); // (4) undefined
console.log('Аналогично, конктекст в такой записи не передаётся.')

