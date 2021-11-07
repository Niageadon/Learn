// 92.24%
// 89.54%
export function isPalindrome(x: number | string): boolean {
	const str = x.toString();
	if (str.length === 2 && str[0] === str[1] || str.length === 1) return true

	return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, str.length - 1))
};

// 72.55%
// 84.80%
export function isPalindrome1(x: number): boolean {
	const str = x.toString();
	const isPalindrome = (from: number, to: number): boolean => {
		if (from === to || to < from) return true
		return str[from] === str[to] && isPalindrome(from + 1, to - 1)
	}
	return isPalindrome(0, str.length - 1);
};
