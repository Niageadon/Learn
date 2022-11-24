// time 94 ms, faster than 65.7%
// memory 42.6 MB, less than 90.6%
const keyDict: Record<string, string[]> = {
    "2": ['a', 'b', 'c'],
    "3": ['d', 'e', 'f'],
    "4": ['g', 'h', 'i'],
    "5": ['j', 'k', 'l'],
    "6": ['m', 'n', 'o'],
    "7": ['p', 'q', 'r', 's'],
    "8": ['t', 'u', 'v'],
    "9": ['w', 'x', 'y', 'z'],
}

export function letterCombinations(digits: string): string[] {
    let result: string[] = [];
    if (digits[1]) {
        letterCombinations(digits.slice(1, digits.length)).forEach(char => {
            keyDict[digits[0]].forEach(c => {
                result.push(c + char);
            })
        })
    } else {
        for (let i = 0; i < keyDict[digits[0]]?.length; i++) {
            result.push(keyDict[digits[0]][i]);
        }
    }
    return result;
};