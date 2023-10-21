/*
*
* Runtime
Details
91ms
Beats 61.00%
*
* Memory
Details
55.06MB
Beats 48.76%
* */

export function containsDuplicate(nums: number[]): boolean {
    const map = {};
    return nums.some(n => {
        if (map[n]) return true
        map[n] = 1;
    })
};
