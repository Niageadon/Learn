// abcd 2_length_of_the_longest_substring
// a c
//  b d
//
// abcdef 3_find_median_of_sorted_arrays
// a   e
//  b d f
//   c
//
// PAYPALISHIRING
// P   A   H   N
//  A P L S I I G
//   Y   I   R

// 94.14%
// 67.28%
export function convert(s: string, numRows: number): string {
	if (numRows === 1) {
		return s
	}
	const map: Record<string, string> = {};
	for (let i = 0; i < numRows; i ++) {
		map[i] = '';
	}
	let pos = -1;
	let incrementPhase = true;
	for(let i = 0; i < s.length; i++) {
		if (incrementPhase && pos === numRows - 1) {
			incrementPhase = false
		} else if (!incrementPhase && pos === 0) {
			incrementPhase = true
		}

		pos = incrementPhase ? pos + 1 : pos - 1
		map[pos] += s[i];
	}
	let result = ''
	for(let i = 0; i < numRows; i++) {
		result += map[i];
	}
	return result;
};
