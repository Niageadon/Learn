const sum = x => ({
	x,
	concat: other =>
		sum(x + other.x)
})
const any = x => ({
	x,
	concat: other =>
		any(x || other.x)
})

const res = sum(3).concat(sum(5)) // w8 8
console.log(1, res)
