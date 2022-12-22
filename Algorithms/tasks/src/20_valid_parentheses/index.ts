const closeCharMap = {
    '(': ')',
    '{': '}',
    '[': ']',
}
export function isValid(s: string): boolean {
     for (let i = 0; i < s.length - 1; i++) {
         if (closeCharMap[s[i]] === s[i+1])
             return s.length > 2 ? isValid(s.slice(0, i) + s.slice(i+2, s.length)): true;
     }
     return false;
};