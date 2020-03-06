function add(a, b) {
    return a + b;
}
function getPos(x, y) {
    if (!x && !y) {
        return 'no data';
    }
    if (x && !y) {
        var result = {
            x: 2,
            y: 0,
            z: 1
        };
        return result;
    }
    return { x: x, y: y };
}
console.log(getPos(1), getPos(), getPos(3, 4));
