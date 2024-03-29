import {findMedianSortedArrays} from './index';

describe('findMedianSortedArrays', () => {
	test('nums1 = [1, 3], nums2 = [2]', () => {
		expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
	});

	test('[1, 3, 7, 8, 11], [1, 2, 5, 8, 12]', () => {
		expect(findMedianSortedArrays([1, 3, 7, 8, 11], [1, 2, 5, 8, 12])).toBe(6);
	});

	test('[1, 2], [3, 4]', () => {
		expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
	});

	test('[0], [0]', () => {
		expect(findMedianSortedArrays([0], [0])).toBe(0);
	});

	test('[], [2]', () => {
		expect(findMedianSortedArrays([], [2])).toBe(2);
	});

	test('[2], []', () => {
		expect(findMedianSortedArrays([2], [])).toBe(2);
	});

	test('[1, 3], [2, 7]', () => {
		expect(findMedianSortedArrays([1, 3], [2, 7])).toBe(2.5);
	});

})

