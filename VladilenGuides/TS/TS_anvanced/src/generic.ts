/*
 function merge<T extends object, R extends object>(a: T, b: R): object {
	 return Object.assign({}, a, b)
 }
*/
//_______________________________________________________________________________

interface Ilength{
	length: number
}
function withCount<T extends Ilength>(val: T): { val: T, count: number } {
	return {
		val,
		count: val.length
	}
}

console.log(withCount('biba'))
console.log(withCount(['boba', 'biba']))
console.log(withCount({length: 123}))
//_______________________________________________________________________________

function getKey<T extends Object, R extends keyof T>(obj: T, key: R) {
	return obj[key]
}
const element = {
	res: 120,
	cap: 0.2
}
console.log(getKey(element, 'res'));
//console.log(getKey(element, 'ind'));
//_______________________________________________________________________________

class Collection<T extends string | number | boolean> {
	constructor(private _items: T[] = []) {
	}
	add(item: T) {
		this._items.push(item);
		return this
	}
	remove(item: T) {
		this._items = this._items.filter(el => el !== item)
		return this
	}
	getCollection(): T[] {
		return this._items
	}
}
const bibs = new Collection<number>([1, 2, 3, 4]);
bibs.add(1).add(2).add(5).remove(1);
console.log(bibs.getCollection())
//_______________________________________________________________________________

