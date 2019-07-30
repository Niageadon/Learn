function last(...list){
    return (list.length > 1)? list[list.length-1]: list[0][list[0].length-1]
}

console.log(last([1,2,3,4,5]));
console.log(last("abcde"));
console.log(last(1,"b",3,"d",5));
