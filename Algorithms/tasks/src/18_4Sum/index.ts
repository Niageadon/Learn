/*
const isThereMoreThanOneElementInList = (arr: number[], target: number) => {
    let isFounded = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            if (isFounded) {
                return true
            }
            isFounded = true;
        }
    }
}
const usedTrinityMap: Record<string, boolean> = {};

export function threeSumClosest(nums: number[], target: number): number[][] {
    const result = []
    for (let numIndex = 1; numIndex < nums.length; numIndex++) {
        const num = nums[numIndex];
        let left = numIndex - 1;
        let right = numIndex + 1;


        while (left >= 0 && right <= nums.length - 1) {
            const leftVal = nums[left];
            const rightVal = nums[right];
            const newVal = num + leftVal + rightVal;
            const variant = [leftVal, num, rightVal, target].sort((a, b) => a - b);

           // if (usedTrinityMap[variant[0] + variant[1] + variant[2]]) break;
            if (newVal === - target) {
                if (leftVal === -2 && num === 0) {

                    let a = 11;
                }
                usedTrinityMap[variant[0] + variant[1] + variant[2]] = true;

                result.push(variant);
            }
            if (newVal > target) {
                left -= 1;
            } else {
                right += 1;
            }
        }
    }
    return result;
};
// time 240 ms, faster than 78.12%
// memory 53.6 MB, less than 52.93%

export function fourSum(nums: number[], target: number): number[][] {
    nums = nums.sort((a, b) => a - b);
    const result = []
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        //if (!isThereMoreThanOneElementInList(nums, num)) continue;
        const r = threeSumClosest(nums, target - num);
        r.forEach(el => {
            result.push(el);
        })
    }
    //[1,2,3,4]
    const map = {};
    return result;
};*/


function threeSumClosest(nums: number[], value: number, target: number, resultMap: Record<string, boolean>): Record<string, boolean> {
    for (let numIndex = 1; numIndex < nums.length; numIndex++) {
        const num = nums[numIndex];
        let left = numIndex - 1;
        let right = numIndex + 1;

        while (left >= 0 && right <= nums.length - 1) {
            const newVal = num + nums[left] + nums[right] + value;
            if ((newVal - target) === 0) {
                const variant = [nums[left], num, nums[right], value].sort((a, b) => a - b);
                resultMap[variant.join(' ')] = true;
            }
            if (newVal > target) {
                left -= 1;
            } else {
                right += 1;
            }
        }
    }
    return resultMap;
};

export function fourSum(nums: number[], target: number): number[][] {
    const valuesDict = {}
    const resultMap = {};
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        threeSumClosest(nums, num, target, resultMap);
        valuesDict[num] = valuesDict[num]? valuesDict[num] + 1 : 1;
    }

    return  Object.keys(resultMap).map(el => el.split(' ').map(e => +e))
        .filter(el => {
        const variantDict = el.reduce((acc, v) => {
            acc[v] = acc[v] ? ++acc[v] : 1;
            return acc;
        }, {})
        return  Object.keys(variantDict).every(key => {
            return variantDict[key] <= valuesDict[key];
        })
    })
};
