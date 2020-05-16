/*
Имеется объект, ключи которого яляются символом, значение - массив индексов, в которых располагается сивмол
Необходимо собрать стрингу
* */
const value = {
	' ': [5],
	d: [10],
	e: [1],
	H: [0],
	l: [2, 3, 9],
	o: [4, 7],
	r: [8],
	w: [6],
}
function getPhrase(obj) {
	let result = [];
	for(let key in obj) {
		obj[key].forEach(el => {
			result[el] = key
		})
	}
	return result.join('')
}
console.log(getPhrase(value))
