export const biba = [
    ['a', 'b', 'c',],
    [1, '2', 3,],
    [4, 5, '6',],
    ['7', 8, '9']
]

// {
//      a: 12,
//      b: 15,
//      c 18
// }
export const calc = (arr: (string | number)[][]): any => {
    return arr.reduce((acc, v: (string | number)[], index) => {
        v.forEach((v, i) => {
            acc[i] = !index ? 0 : acc[i] + Number(v)
        });

        if (index === arr.length - 1) {
            arr[0].forEach((v, i) => {
                acc[v] = acc[i];
                delete acc[i];
            })
        }
        return acc;
    }, {})
}