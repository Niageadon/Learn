export const getCombinations = (nums: number[]) : number[][] => {
    if (nums.length == 1) return [];
    const result = [];
    for (let from = 0; from < nums.length; from++) {
        const to = from + nums.length;
        const mask = [...nums.slice(from, to - from), ...nums.slice(0, from)]
        const char = mask[0];
        if(mask.length == 2) result.push(mask)
        getCombinations(mask.slice(1, mask.length)).forEach((el, i) => {
            result.push([char, ...el]);
        })
    }
    return result;
}

/*
export function getCombinations(input) {
    const combinations = [];

    next([], [...input]);

    function next(seq, arr) {
        if (arr.length === 1) {
            seq.push(arr[0]);
            return combinations.push(seq);
        }

        arr.forEach((item, index) => {
            const nextSeq = [...seq, item];
            const nextArr = [...arr];
            nextArr.splice(index, 1);
            next(nextSeq, nextArr);
        })
    }

    return combinations;
}*/
