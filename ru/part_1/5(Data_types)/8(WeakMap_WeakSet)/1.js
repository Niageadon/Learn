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