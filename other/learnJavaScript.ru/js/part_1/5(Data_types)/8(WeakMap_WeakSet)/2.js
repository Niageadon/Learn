/*
Есть массив сообщений такой же, как и в предыдущем задании.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];
Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?

В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.

P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее.
*/

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
let readed = new WeakMap();
console.log('А тут WeakMap хорошо смотрится.');

serverSimalation();
function readMessage(){
    readed.set(messages[messages.length-1], new Date());
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
    }, 1000);
}
function random(factor) {
// возвращает true в "factor%" случаев
    let val = Math.random() + factor/100;
    return (val > 1);
}