type IWithMultiple = { v: string, multiple?: boolean }
const isNoNextMultiple = (map: Record<string, IWithMultiple>, pos: number, max: number): boolean => {
	for (let i = pos + 1; i <= max; i++) {
		if (!map[i - 1].multiple) return true;
	}
	return false;
}

export function isMatch(str: string, p: string): boolean {
	let entriesCount = 0;
	const generateMap = (): Record<string, IWithMultiple> => {
		let map: Record<string, IWithMultiple> = {};
		for(let i = 0; i < p.length; i++) {
			if (p[i] === '*') {
				map[entriesCount - 1].multiple = true;
			} else {
				map[entriesCount] = { v: p[i] };
				entriesCount++;
			}
		}
		return map;
	}

	let isMatch = false;
	const map = generateMap();
	let prevMultipleChar: string | undefined;
	let index = 0;
	for (let i = 0; i < str.length; i++) {
		const mapChar = map[index]?.v
		const char = str[i]
		if (str[i] === prevMultipleChar || prevMultipleChar === '.') {
			if (!map[index + 1]?.multiple && str[i] === map[index + 1]?.v && str[i + 1] !== str[i]) {
				prevMultipleChar = map[index].v;
				index++;
				i--;
				continue;
			}
			// Последний символ, но есть незадействованные вхождения
			if ((i === str.length - 1) && isNoNextMultiple(map, i, entriesCount)) {
				isMatch = false;
				break;
			}
			if (i === str.length - 1) isMatch = true;
			continue
		}
		else {
			if (!mapChar) break

			if (mapChar === char || mapChar === '.') {
				if (map[index].multiple) {
					prevMultipleChar = map[index].v;
				} else {
					prevMultipleChar = undefined
				}
				if (i === str.length - 1) {
					isMatch = true;
				} else if (i < str.length - 1) {
					index++;
				}
				continue
			} else {
				isMatch = false;
				i--;
				index++;
				continue;
			}
		}
		if (i < str.length - 1) index++;
	}

	if (map[index + 1] !== undefined) {
		isMatch = false;
	}
	return isMatch;
};
