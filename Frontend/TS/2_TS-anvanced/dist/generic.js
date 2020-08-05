"use strict";
/*
 function merge<T extends object, R extends object>(a: T, b: R): object {
     return Object.assign({}, a, b)
 }
*/
//_______________________________________________________________________________
function withCount(val) {
    return {
        val,
        count: val.length
    };
}
console.log(withCount('biba'));
console.log(withCount(['boba', 'biba']));
console.log(withCount({ length: 123 }));
//_______________________________________________________________________________
function getKey(obj, key) {
    return obj[key];
}
const element = {
    res: 120,
    cap: 0.2
};
console.log(getKey(element, 'res'));
//console.log(getKey(element, 'ind'));
//_______________________________________________________________________________
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
        return this;
    }
    remove(item) {
        this._items = this._items.filter(el => el !== item);
        return this;
    }
    getCollection() {
        return this._items;
    }
}
const bibs = new Collection([1, 2, 3, 4]);
bibs.add(1).add(2).add(5).remove(1);
console.log(bibs.getCollection());
//_______________________________________________________________________________
//# sourceMappingURL=generic.js.map