/*
Есть массив сообщений:

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. Добавляются новые сообщений и удаляются старые, и вы не знаете в какой момент это может произойти.

Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано?». Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.

P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.

P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства. Если сообщения принадлежат какиму-то другому коду, то это может привести к плохим последствиям.
*/
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
let readed = new WeakSet();
console.log('Можно WeakSet использовать.');

serverSimalation();
function readMessage(){
    readed.add(messages[messages.length-1]);
    console.log("readed", readed);
}
function serverSimalation(){
    let fromId = 1;
    setInterval(() => {
    if(random(30)){
        messages.pop();
    }
    if(random(40)){
        messages.push({
            text: 'boba',
            from: fromId
        });
        if(random(80)){
            readMessage("messages", messages);
        }
    }
    
    console.log(messages);
    }, 3000);
}
function random(factor) {
// возвращает true в "factor%" случаев
    let val = Math.random() + factor/100;
    return (val > 1);
}