// time 6.62%
// memory 32.45%
export function intToRoman(num: number): string {
    const dict = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        //VL: 45,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let result = '';
    while(num > 0) {
        for(let key in dict) {
            if (num >= dict[key]) {
                result += key;
                num -= dict[key];
                break;
            }
        }
    }

    return result;
};