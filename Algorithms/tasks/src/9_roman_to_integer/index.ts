// time 83.33%
// memory 85.55%
export function romanToInt1(s: string): number {
	const map = {
		M: 1000,
		D: 500,
		C: 100,
		L: 50,
		X: 10,
		V: 5,
		I: 1
	}

	let result = 0;
	for(let i = 0; i < s.length; i++) {
		const v = map[s[i]];
		const next = map[s[i + 1]];
		if (next > v) {
			result += next - v;
			i++;
		} else {
			result += v;
		}
	}
	return result;
};

// time 55.06%
// memory 50.11%
export function romanToInt(s: string): number {
	const map = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		VL: 45,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	}

	let result = 0;
	for(let i = 0; i < s.length; i++) {
		if (map[s[i] + s[i+1]]) {
			result += map[s[i] + s[i+1]];
			i++;
		} else {
			result += map[s[i]];
		}
	}
	return result;
};

// time 83.33%
// memory 66.88%
export function romanToInt4(s: string): number {
	const map = {
		M: 1000,
		D: 500,
		C: 100,
		L: 50,
		X: 10,
		V: 5,
		I: 1
	}

	let result = 0;
	let prev = 0;
	Array.from(s).map(char => {
		const v = map[char];
		result += v;
		if (v > prev) {
			result -= prev + prev
		}
		prev = v
	})
	return result;
};

// time 55.06%
// memory 50.11%
export function romanToInt3(s: string): number {
	const map = {
		M: 1000,
		D: 500,
		C: 100,
		L: 50,
		X: 10,
		V: 5,
		I: 1
	}

	let result = 0;
	let prev = 0;
	Array.from(s).forEach(char => {
		const v = map[char];
		result += v;
		if (v > prev) {
			result -= prev + prev
		}
		prev = v
	})
	return result;
};

// time 75.11%
// memory 66.88%
export function romanToInt2(s: string): number {
	const map = {
		M: 1000,
		D: 500,
		C: 100,
		L: 50,
		X: 10,
		V: 5,
		I: 1
	}

	let result = 0;
	let prev = 0;
	for(let i = 0; i < s.length; i++) {
		const v = map[s[i]];
		result += v;
		if (v > prev) {
			result -= prev + prev
		}
		prev = v
	}
	return result;
};

