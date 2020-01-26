export default class service{
    constructor(text){
        this.text = text;
    }

    log(){
        console.log('[service module:]', this.text)
    }
}