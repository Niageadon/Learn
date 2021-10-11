export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
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

