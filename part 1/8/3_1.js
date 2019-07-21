/*
Напишите конструктор User для создания объектов:

С приватными свойствами имя firstName и фамилия surname.
С сеттерами для этих свойств.
С геттером getFullName(), который возвращает полное имя.
Должен работать так:

function User() {
  //

}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов


*
*/


function User() {
    let name = {first: 'boba', second: 'bibovich'};
    this.setFirstName = function (str) {
        (typeof str === "string")? name.first = str: console.log('Введёное имя некорректное')
    };
    this.setSurname = function (str) {
        (typeof str === "string")? name.second = str: console.log('Введёное имя некорректное')
    };
    this.getFullName = function(){
        return name.first + ' ' + name.second
    }
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов