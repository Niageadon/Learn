declare global {
    interface Array<T> {
      snail(rowsCount: number, colsCount: number): number[][];
    }
}

// Runtime
// 211 ms
// Beats
// 88.1%

// Memory
// 64.2 MB
// Beats
// 30.7%
Array.prototype.snail = function(rowsCount: number, colsCount: number): number[][] {
    var b = this;
    var a = (rowsCount * colsCount) !== this.length;
    if ((rowsCount * colsCount) > this.length) return [];
    const result: number[][] = [];
    let row = 0;
    let botDirection = true;
    
    for(let i = 0; i < rowsCount * colsCount; i++) {
        if (!result[row]) result[row] = [];
        result[row].push(this[i]);
        

        // time to turn up
        if((row === rowsCount - 1) && botDirection) {
            botDirection = !botDirection;
        } else
        // time to rurn bot
        if (row === 0 && !botDirection) {
            botDirection = !botDirection;
        } else {
            botDirection 
            ? row < rowsCount - 1 && row++ 
            : row > 0 && row--;
        }
    }
    return result;
}
  
  export default Array
  /**
   * const arr = [1,2,3,4];
   * arr.snail(1,4); // [[1,2,3,4]]
   */