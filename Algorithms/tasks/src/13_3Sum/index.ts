/*
export function threeSum(nums: number[]): number[][] {
    const singleValuesMap: Record<string, number[][]> = {};
    const doubleValuesMap: Record<string, number[][]> = {};
    const result: number[][] = [];
    const isElementsEqual = (a: number[], b: number[]): boolean => {
        const map = {};
        a.forEach(el => {
            map[el] = map[el] ? map[el]++ : 1;
        })
        return b.every(el => {
            if(!map[el]) return false;
            map[el]--;
            return true;
        })
    }
    nums.forEach((num, numIndex) => {
        if (doubleValuesMap[-num]) {
            doubleValuesMap[-num].forEach(el => {
                const res = [...el, numIndex].map(el => nums[el]);
                if (result.every(el => !isElementsEqual(el, res)) /!*&& !el.includes(numIndex)*!/) {
                    result.push([...el, numIndex].sort((a,b) => a - b));
                }
            })
        }
        Object.keys(singleValuesMap).forEach(value => {
            const index = +value + num;
            if(!doubleValuesMap[index]) doubleValuesMap[index] = [];
            singleValuesMap[value].forEach(el => {
                doubleValuesMap[index].push([...el, numIndex]);
            })
        })
        if (!singleValuesMap[num]) singleValuesMap[num] = [];
        singleValuesMap[num].push([numIndex]);
    })
    const acc = {};
    const valuesAcc = {};


    return result.filter((el) => {
        const v = el.join('')
        if (acc[v]) return false
        acc[v] = true;
        return true;
    }).map((el) => el.map(el => nums[el])).filter(el => {
        const v = el.sort((a, b) => a - b ).join('');
        if (valuesAcc[v]) return false;
        valuesAcc[v] = true;
        return true;
    });
};
*/
