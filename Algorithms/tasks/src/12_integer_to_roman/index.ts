// time 251 ms, faster than 17.67%
// memory 47.8 MB, less than 14.33%
export function intToRoman(num: number): string {
    const dict: [string, number][] = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ]
    let result = '';
    for(let [key, value] of dict) {
        while(num >= value) {
            result += key;
            num -= value;
            if (num == 0) break;
        }
    }

    return result;
};

// time 273 ms, faster than 12.00%
// memory 47.4 MB, less than 18.33%
export function intToRoman3(num: number): string {
    const dict: [string, number][] = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ]
    let result = '';
    while(num > 0) {
        for(let [key, value] of dict) {
            if (num >= value) {
                result += key;
                num -= value;
                if (num >= value) break;
            }
        }
    }

    return result;
};

// time 234 ms, faster than 24.67%
// memory 47.7 MB, less than 15.33%
export function intToRoman2(num: number): string {
    const dict: [string, number][] = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ]
    let result = '';
    while(num > 0) {
        for(let [key, value] of dict) {
            if (num >= value) {
                result += key;
                num -= value;
                break;
            }
        }
    }

    return result;
};

// time 6.62%
// memory 32.45%
export function intToRoman1(num: number): string {
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