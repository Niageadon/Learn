
/*
export function generateParenthesis(n: number): string[] {
    let result = [];
    if (n === 1) return ['()']
    for (let i = 0; i < n; i++) {
        const variants = Array(i + 1).fill('()');
        var aa=1;
        variants.forEach((v, index) => {
            const variant = '(' + generateParenthesis(n - i - 1) + ')'
            result.push(variant)
        })
        if(variants.length > 1)
            result.push(variants.join(''))
    }
    return result;
}*/



// n = 3
// [((())), (())(), ()(()), ()()()]
//  (    ), (  )(), ()(  ), ()()() 0
//   (  ) ,  ()   ,    () ,        1
//    ()                           2


/*
* Runtime
56 ms
Beats
84.3%
*
* Memory
45.1 MB
Beats
32.78%
* */

export function generateParenthesis (n: number, arr = true): string[] {
    if (n === 1) return ["()"];
    const result = new Set<string>();
    generateParenthesis(n - 1, false).forEach((str) => {
        result.add(`(${str})`);
        result.add(`${str}()`);
        result.add(`()${str}`);
        for (let i = 1; i < str.length; i++) {
            if (str.charAt(i - 1) === "(" && str.charAt(i) === ")") {
                result.add(`${str.slice(0, i)}()${str.slice(i)}`);
                result.add(`${str.slice(0, i)})(${str.slice(i)}`);
            }
        }
    });
    return Array.from(result);
};
