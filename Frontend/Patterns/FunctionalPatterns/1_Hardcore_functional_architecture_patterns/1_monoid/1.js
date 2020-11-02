import { List } from 'immutable-ext'
// monoid  = semigroup + identity
const sum = x => ({
	x,
	concat: other =>
		sum(x + other.x)
})
sum.empty = () => sum(0)

const amplify = x => ({
	x,
	concat: other =>
		sum(x * other.x)
})
amplify.empty = () => amplify(1)

const any = x => ({
	x,
	concat: other =>
		any(x || other.x)
})
any.empty = () => any(false)

const all = x => ({
	x,
	concat: other =>
		any(x && other.x)
})
all.empty = () => all(true)

const res = List([true, true])
	.foldMap(all, all.empty())
console.log(2, res)
