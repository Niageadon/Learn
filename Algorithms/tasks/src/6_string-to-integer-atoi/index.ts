// 72.38%
// 26.24%
export function myAtoi(s: string): number {
	let result: string | number = '';
	let dirty = false;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '-' && !dirty) {
			result = '-'
			dirty = true;
			continue
		}
		if (s[i] === '+' && !dirty) {
			result = '+'
			dirty = true;
			continue
		}
		if (s[i] === ' ') {
			if (dirty) break
			continue;
		}
		if (Number.isNaN(Number(s[i]))) {
			break;
		}
		if (typeof +s[i] === "number") {
			dirty = true;
			result += s[i]
			continue
		}
	}
	if (result === '-') return 0
	if (result === '+') return 0
	if (Number(result) < -2147483648) return -2147483648
	if (Number(result) > 2147483646) return 2147483647
	return +result
};
