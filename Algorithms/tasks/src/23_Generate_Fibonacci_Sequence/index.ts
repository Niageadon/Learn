

//
// Runtime 59 ms
// Beats
// 72.11%

// Memory
// 44.6 MB
// Beats
// 19.26%
/**
 * @return {Generator<number>}
 */
export const fibGenerator = function*() {
    let v = 0;
    let prev: number | undefined = undefined;
    while(1) {
        if (prev === 0 && v === 0) {
            v = 1
            yield 1;
        }
        [v, prev] = [v + (prev ?? 0), v];
        yield v ;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */