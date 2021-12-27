// time 92.96%
// memory 78.76%
export function longestCommonPrefix5(strs: string[]): string {
    for (let charIndex = strs[0].length; charIndex > 0; charIndex--) {
        const char = strs[0].slice(0, charIndex);
        for (let i = 0; i < strs.length; i++) {
            if (strs[i].indexOf(char) === 0) {
                if (i === strs.length - 1) return char;
                continue
            }
            break
        }
    }
    return ''
};

// time 84.22%
// memory 78.76%
export function longestCommonPrefix4(strs: string[]): string {
    if (strs.length === 1) return strs[0]
    for (let charIndex = strs[0].length; charIndex > 0; charIndex--) {
        const char = strs[0].slice(0, charIndex);
        for (let i = 0; i < strs.length; i++) {
            if (strs[i].indexOf(char) === 0) {
                if (i === strs.length - 1) return char;
                continue
            }
            break
        }
    }
    return ''
};

// time 84.30%
// memory 31.39%
export function longestCommonPrefix3(strs: string[]): string {
    if (strs.length === 1) return strs[0]
    for (let charIndex = 0; strs[0].length > charIndex; charIndex++) {
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][charIndex] !== strs[0][charIndex]) {
                return strs[0].slice(0, charIndex) || '';
            }
        }
        if (charIndex === strs[0].length - 1) return strs[0]
    }
    return ''
};

// time 84.30%
// memory 20.57%
export function longestCommonPrefix2(strs: string[]): string {
    let charIndex = 0;
    let error = false;
    while (strs[0].length > charIndex) {
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][charIndex] !== strs[0][charIndex]) {
                error = true
                break
            }
        }
        if (error) break
        charIndex++;
    }
    return strs[0].slice(0, charIndex);
};

// time 84.30%
// memory 9.75%
export function longestCommonPrefix1(strs: string[]): string {
    let charIndex = 0;
    let char;
    let error = false;
    while (strs[0].length > charIndex) {
        for (let i = 0; i < strs.length; i++) {
            if (i === 0) char = strs[i][charIndex];
            if (strs[i][charIndex] !== char) {
                error = true
                break
            }
        }
        if (error) break
        charIndex++;
    }
    return strs[0].slice(0, charIndex);
};