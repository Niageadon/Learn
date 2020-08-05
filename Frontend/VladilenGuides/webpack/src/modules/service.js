export default class service{
    constructor(text, img) {
        this.img = img;
        this.text = text;
    }

    log(){
        console.log('[service module:]', this.text)
        console.log('service img', JSON.stringify(this.img));
    }
}
