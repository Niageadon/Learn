// time 42.83%
// memory 79.21%
export function maxArea(height: number[]): number {
    let a = 0;
    let b = height.length - 1;
    let max = 0;
    while (1) {
        const isABigger = height[a] > height[b];
        const value = (b - a) * (isABigger ? height[b] : height[a]);
        max = Math.max(max, value);
        if (a === b) {
            return Math.max(max, value)
        } else {
            isABigger ? b-- : a++;
        }
    }
};