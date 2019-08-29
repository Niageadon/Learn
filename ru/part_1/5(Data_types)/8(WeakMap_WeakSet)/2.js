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