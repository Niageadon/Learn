// time 102 ms, faster than 95.7%
// memory 44.6 MB, less than 92.17%
export function threeSumClosest(nums: number[], target: number): number {
    nums = nums.sort((a, b) => a - b);
    let result;
    for (let numIndex = 1; numIndex < nums.length; numIndex++) {
        const num = nums[numIndex];
        let left = numIndex - 1;
        let right = numIndex + 1;
        while (left >= 0 && right <= nums.length - 1) {
            const newVal = num + nums[left] + nums[right];
            if (result === undefined || Math.abs(newVal - target) < Math.abs(result - target)) result = newVal;
            if (result === target) return result;
            if (newVal > target) {
                left -= 1;
            } else {
                right += 1;
            }
        }
    }
    return result;
};