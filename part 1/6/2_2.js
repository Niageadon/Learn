/*
Объявлен объект с toString и valueOf.

Какими будут результаты alert?

var foo = {
  toString: function() {
    return 'foo';
  },
  valueOf: function() {
    return 2;
  }
};

alert( foo );
alert( foo + 1 );
alert( foo + "3" );
 **/

var foo = {
  toString: function() {
    return 'foo';
  },
  valueOf: function() {
    return 2;
  }
};

alert( foo );
alert( foo + 1 );
alert( foo + "3" );
console.log('Первый алерт - вернет результат метода "toString"');
console.log('Второй алерт - будет использовать "valueOf", результат - 3');
console.log('Третий алерт - так же будет использовать "valueOf", результат "23"');

