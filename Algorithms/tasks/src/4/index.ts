// 18.13%
// 23.76%
export function longestPalindrome(str: string): string {
	const isPalindrome = (from: number, to: number): boolean => {
		if (from === to || to < from) return true
		return str[from] === str[to] && isPalindrome(from + 1, to - 1)
	}
	const map: Record<string, string> = {};
	let result = '';
	for(let i = 0; i < str.length; i++) {
		const char = str[i];
		map[i] = char;
		map[char] = `${(map[char] ? map[char] + ' ' : '')}${i}`;
	}
	for(let i = 0; i < str.length; i++) {
		const char: string = str[i];
		const indexes: string[] = map[char].split(' ');
		const indexesMap: Record<string, string> = indexes.reduce((acc, val, index) => {
			acc[index] = val;
			return acc;
		}, {});
		const stop = indexes.findIndex(el => el === i.toString())
		for(let j = indexes.length; j > stop; j--) {
			const from = i;
			const to = +indexesMap[j - 1];
			if (isPalindrome(from, to)) {
				if (result.length < (to - from + 1)) result = str.slice(from, to + 1);
				break;
			}
		}
	}
	return result;
}

// 18.13%
// 23.76%
export function longestPalindrome1(str: string): string {
	const isPalindrome = (from: number, to: number): boolean => {
		if (from === to || to < from) return true
		return str[from] === str[to] && isPalindrome(from + 1, to - 1)
	}
	const map: Record<string, string> = {};
	let result = '';
	for(let i = 0; i < str.length; i++) {
		const char = str[i];
		map[i] = char;
		map[char] = `${(map[char] ? map[char] + ' ' : '')}${i}`;
	}
	for(let i = 0; i < str.length; i++) {
		const char: string = str[i];
		const indexes: string[] = map[char].split(' ');
		const indexesMap: Record<string, string> = indexes.reduce((acc, val, index) => {
			acc[index] = val;
			return acc;
		}, {});
		const stop = indexes.findIndex(el => el === i.toString())
		for(let j = indexes.length; j > stop; j--) {
			const from = i;
			const to = +indexesMap[j - 1];
			if (isPalindrome(from, to)) {
				if (result.length < (to - from + 1)) result = str.slice(from, to + 1);
				break;
			}
		}
	}
	return result;
}

