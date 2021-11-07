type IWithMultiple = { v: string, multiple?: boolean }

export function isMatch(s: string, p: string): boolean {
	const generateMap = (): Record<string, IWithMultiple> => {
		let index = 0;
		let map: Record<string, IWithMultiple> = {};
		for(let i = 0; i < p.length; i++) {
			if (p[i] === '*') {
				map[index - 1].multiple = true;
			} else {
				map[index] = { v: p[i] };
				index++;
			}
		}
		return map;
	}

	let isMatch = false;
	const map = generateMap();
	let prevMultipleChar: string | undefined;
	let index = 0;
	for(let i = 0; i < s.length; i++) {
		const mapChar = map[index]?.v
		const char = s[i]
		const isPrevLock = i === (s.length - 1) && p.length > 2
		if (s[i] === prevMultipleChar || prevMultipleChar === '.') {
			if (isPrevLock) {
				isMatch = false;
				break;
			}
			if (i === s.length - 1) isMatch = true;
			continue
		} else if (mapChar === char || mapChar === '.') {
			if (map[index].multiple) {
				prevMultipleChar = map[index].v;
			} else {
				prevMultipleChar = undefined

			}
			if (i === s.length - 1) {
				isMatch = true;
			} else if (i < s.length - 1) {
				 index++;
			}
			continue
		} else {
			isMatch = false;
			break
		}
		if (i < s.length - 1) index++;
	}

	if (map[index + 1] !== undefined) {
		isMatch = false;
	}
	return isMatch;
};
