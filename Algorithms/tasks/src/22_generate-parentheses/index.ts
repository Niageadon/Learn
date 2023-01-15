
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
export function generateParenthesis(n: number): string[] {
    let result = [];
    if (n === 1) return ['()']
    for (let i = n - 1; i > -1; i--) {
        let variants = Array(i + 1).fill('()');
        let a = {}

        a[i] = variants.map((v, index) =>
            '(' + generateParenthesis(n - i - index - 1) + ')'
        )

            result.push(a[i].join(''))
    }
    return result;
}

// ['()'] ==>