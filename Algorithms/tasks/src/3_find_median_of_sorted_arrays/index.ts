export function findMedianSortedArrays(a: number[], b: number[]): number {
	// 22.47%
	// 82.85%
	let length = a.length + b.length;
	const isOdd = (length) % 2
	const to = isOdd ? Math.ceil(length / 2) - 1 : length / 2
	const result = []
	let aI = 0;
	let bI = 0;
	for(let i = 0; i <= to; i++) {
		if (b[bI] === undefined || a[aI] !== undefined && (a[aI] <= b[bI])) {
			result.push(a[aI]);
			aI ++;
		} else {
			result.push(b[bI]);
			bI ++;
		}
	}
	return isOdd ? result[to] : (result[to - 1] + result[to]) / 2
};

export function findMedianSortedArrays1(nums1: number[], nums2: number[]): number {
	// 52.49%
	// 76.84%
	const mergeSortedArrays = (a: number[], b: number[]): number[] => {
		let i = a.length - 1;
		let j = b.length - 1;
		let end = a.length + b.length - 1;

		while (j >= 0) {
			if (i >= 0 && a[i] > b[j]) {
				a[end] = a[i];
				i--;
			} else {
				a[end] = b[j];
				j--;
			}
			end--;
		}
		return a
	}
	const arr = mergeSortedArrays(nums1, nums2)
	const length = arr.length;
	const isOdd = length % 2

	if (length === 0) return 0
	if (isOdd) {
		return arr[Math.ceil(length / 2) - 1]
	} else {
		return (arr[(length / 2) - 1] + arr[(length / 2)]) / 2
	}
};

