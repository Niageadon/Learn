/*
Что выведет alert в этом коде? Почему?

var user = {
  firstName: "Василий",

  export: this
};

alert( user.export.firstName );
**/
console.log('undefined');
console.log('При таком вызове this - window, в этом можно убедиться, если создать глобальную переменную firstName');
firstName = 0;
var user = {
  firstName: "Василий",
  export: this
};

alert( user.export.firstName );
