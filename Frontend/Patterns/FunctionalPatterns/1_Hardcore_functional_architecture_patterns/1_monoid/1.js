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

const res = amplify.empty().concat(amplify(10)) // w8 8
console.log(1, res)
