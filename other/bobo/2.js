/*
	Имеется массив целочисленных чисел
	Необходимо написать функциою, возвращающую копию отсортиртированного массива таким образом,
	чтобы четные числа остались на своих местах, а нечётные отсортировались в порядке возрастания
*/


const arr = [2, 3, 7, 8, 6, 1, 5, 9, 4];
// result = [2, 1, 3, 8, 6, 5, 7, 9, 4]
console.log(sortOdd(arr))


function sortOdd(arr) {
	// O(3n)
	const sorted = arr.filter(el => el % 2).sort((a, b) => a - b)
	let i = 0;
	return arr.map(el => el % 2? sorted[i++]: el)
}

function sortOdd1(arr) {
	// O(3n)
	let result = [];
	let odd = [];
	let even = {};
	fill();
	getResult();
	return result
	
	function getResult() {
		// O(n)
		for(let i in arr) {
			if(even[i]) {
				result.push(even[i])
			} else {
				result.push(odd.pop())
			}
		}
	}
	function fill() {
		// O(2n)
		arr.forEach((el, index) => {
			if(!(el%2)) {
				even[index] = el
			} else {
				odd.push(el)
			}
		})
		odd.sort((a, b) => b - a)
	}
};
