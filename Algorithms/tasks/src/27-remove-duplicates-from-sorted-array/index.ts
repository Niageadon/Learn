/*
* Runtime
Details
121ms
Beats 22.90%
* */
/*export function removeDuplicates(nums: number[]): number {
    const set = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            nums.splice(i, 1) && i--;
        } else {
            set.add(nums[i]);
        }
    }

    return set.size
};*/


/*
*
* Runtime
Details
64ms
Beats 85.50%of users with TypeScript
* */
export function removeDuplicates(nums: number[]): number {
    const set = new Set<number>();
    nums.forEach(n => {
        set.add(n)
    })
    nums.length = 0;
    Object.assign(nums, Array.from(set))
    return set.size
};
