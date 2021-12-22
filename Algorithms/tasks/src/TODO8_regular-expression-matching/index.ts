const prepareEntries = (s: string): string => {
	if (!(s.indexOf('.') !== -1)) return s;
	let result = '';
	const dotIndexes = findDotIndexes(s);

}

const findDotIndexes = (s: string): number[] => {
	let result = [];
	for(let i = 0; i < s.length; i++) {
		if(s[i] === '.') result.push(i)
	}
	return result;
}

export function isMatch(str: string, p: string, prevMultipleChar: string = undefined): boolean {
	let charIndex = 0;
	let entryIndex = 0;

	const incrementEntryIndex = (isEntryMultiple: boolean) => {
		if(isEntryMultiple) {
			prevMultipleChar = p[entryIndex];
		} else {
			prevMultipleChar = undefined;
		}
		return isEntryMultiple ? entryIndex + 2 : entryIndex + 1;
	}
	const isNoNextEntry = (currentIndex: number, isMultiple: boolean) => {
		return currentIndex >= (isMultiple ? p.length - 2: p.length - 1);
	}
	const isRequiredEntryInFuture = (currentIndex: number) => {
		//if (p[p.length - 1] !== '*') return true;
		for (let i = currentIndex; i < p.length - 1; i++) {
			if(p[i] !== '*' && p[i + 1] !== '*') return true;
		}
		if ((currentIndex !== p.length - 1) && p[p.length - 1] !== '*') return true;
		return false;
	}
	const incrementCharIndex = () => {
		return charIndex + 1;
	}
	const isLastChar = (charIndex: number) => {
		return charIndex === (str.length - 1);
	}
	const isEqual = (a: string, b: string): boolean => {
		return a === b || b === '.';
	}
	const isNoNextMultiple = (pos: number): boolean => {
		p.slice(pos);
		return false;
	}

	while(1) {
		const entry = p[entryIndex];
		const char = str[charIndex];
		const isEntryMultiple = p[entryIndex + 1] === '*';

		if (!char) {
			if (!isRequiredEntryInFuture(entryIndex) && (char || isEntryMultiple)) {
				return true;
			}
			return false;
		}
		if (char === prevMultipleChar) {
			const match = isMatch(str.slice(charIndex + 1), p.slice(entryIndex), prevMultipleChar);
			if (match) {
				return true
			} else {
				//if (isNoNextEntry(entryIndex, isEntryMultiple)) return false
				if (isLastChar(charIndex) && isRequiredEntryInFuture(entryIndex)) return false
				if (isLastChar(charIndex)) return true
				charIndex = incrementCharIndex();
				continue;
			}
		} else if (prevMultipleChar === '.') {
			if (!isRequiredEntryInFuture(entryIndex - 1)) {
				return true
			}
			const match = isMatch(str.slice(charIndex + 1), p.slice(entryIndex), prevMultipleChar);
			if (match) {
				return true
			} else {
				if (isLastChar(charIndex) && isRequiredEntryInFuture(entryIndex)) return false
				if (isLastChar(charIndex)) return true
				if (isNoNextEntry(entryIndex, isEntryMultiple)) return false
				charIndex = incrementCharIndex();
				continue;
			}
		} else {
			// Нет предыдущего повторяющегося символа
			if (!entry) return false;

			if (isEqual(char, entry)) {
				if (isLastChar(charIndex) && !isRequiredEntryInFuture(entryIndex)) {
					return true
				}
				charIndex = incrementCharIndex();
				entryIndex = incrementEntryIndex(isEntryMultiple);
				continue;
			} else {
				if (!isEntryMultiple) {
					return false;
				}
				entryIndex = incrementEntryIndex(isEntryMultiple);
				continue;
			}
		}
		if (charIndex === str.length) {
			return true;
		} else {
			return false;
		}
	}

	return true;
};

/*
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
* */
