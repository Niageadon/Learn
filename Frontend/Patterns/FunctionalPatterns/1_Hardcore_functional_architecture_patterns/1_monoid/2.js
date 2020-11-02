const Intersection = x => ({
	// is not monoid
	x,
	concat: other =>
		Intersection(_.intersection(x, other.x))
})

Intersection([1,2,3]).concat(Intersection([12,11,4]))
