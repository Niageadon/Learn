/*
Что выведет alert в этом коде? Почему?

var name = "";

var user = {
  name: "Василий",

  export: function() {
    return this;
  }

};

alert( user.export().name );
* **/

var name = "";

var user = {
  name: "Василий",

  export: function() {
    return this;
  }

};

alert( user.export().name );
console.log('Выражение user.export() возвращает user, поэтому выведется "Василий"');
