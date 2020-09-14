/*
Steps:
1 - Understand the problem
2 - Explore Examples
3 - Break it down
4 - Solve / simplify
5 - Lock back and refactor


Understand the problem
1 - Can i restate the problem with my own words?
2 - What are the inputs that go into the problem?
3 - What are the outputs that should come from the solution to the problem?
4 - Can the outputs be determined from the inputs?
5 - How should i label the important pieces of data that are a part of the problem?


Explore examples
1 - Start with simple example
2 - Progress to more complex examples
3 - Explore Examples with empty or invalid inputs

Solve / simplify
1 - Find the core difficulty in what you are trying to do
2 - Temporarily ignore that difficulty
3 - Write a simplified solution
4 - Then incorporate that difficulty back in

Lock back and refactor questions
1 - Can you check
* */

console.log(charCount('aaa'))
/*
{ a: 3 }
* */
console.log(charCount1('hello'))
/*
{
 h: 1,
 e: 1,
 l: 2,
 o: 1
}
* */


function charCount(str) {
// make object to return at end
// loop over str
// return object
	let result = {};
	//   O(N)          O(N)                 O(N)                  O(N)  O(N)
	str.toLowerCase().split('').forEach(el => result[el] = result[el]? ++result[el]: 1)
	return result
}

function charCount1(str) {
	let result = {};
	str = str.toLowerCase(); // O(N)
	for (let char of str) {  // O(N)
		result[char] = result[char]++ || 1  // O(N)
	}
	return result
}
