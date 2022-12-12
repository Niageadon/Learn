export class PercentageTimer {
    private sum = 0;
    private map = {};
    private dateStartMap = {};

    start(key: string) {
        this.dateStartMap[key] = +new Date();
    }

    stop(key: string) {
        const newVal = +new Date - this.dateStartMap[key]
        this.sum += newVal;
        this.map[key] = this.map[key] ? this.map[key] + newVal : newVal;
    }

    getSum() {
        Object.keys(this.map).forEach(key => {
            console.log(`${key}: ${this.map[key]} --- ${this.map[key] / this.sum * 100}%`)
        })
    }
}