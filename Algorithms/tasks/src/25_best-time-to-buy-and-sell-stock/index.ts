// [7, 1, 2, 4, 1, 3, 8]


/*
*
79ms
Beats 71.72%
*
Memory
Details
51.90MB
Beats 54.99%
* */
export function maxProfit(prices: number[]): number {
    let currentMaxProfit = 0;
    let min = Infinity;
    prices.forEach(dayPrice => {
        if (min !== Infinity) {
            const attempt = dayPrice - min;
            if (attempt > currentMaxProfit) {
                currentMaxProfit = attempt;
            }
        }
        if (dayPrice < min) {
            min = dayPrice;
        }
    })
    return currentMaxProfit;
};
