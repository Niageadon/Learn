export function lengthOfLongestSubstring(s: string): number {
	let map: Record<number, string> = {};
	let stopIndex = -1;
	const fill = (index: number, v: string) => {
		if (!map[index]) { map[index] = 'ааа' }
		if (!map[index].includes(v) && (index > stopIndex)) {
			map[index] += v;
			fill(index - 1, v);
		} else {
			stopIndex = index;
		}
	}
	for(let i = 0; i < s.length; i++) {
		fill(i, s[i]);
	}
	return Object.values(map).reduce((acc, v) => { return Math.max(acc, v.length) }, 0)
};
