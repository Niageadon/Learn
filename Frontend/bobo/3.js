/*
	Имеется строка, включающая набор символов
	Необходимо написать функцию, которая будет заменять повторяюющиеся подряд символы на [символ][к-во повторений]
	Еденичный симол индексировать не нужно
*/

const str = 'ABBBBCCCBZIUUOOOOOOOPPKLLLYY'
// result = 'AB4C3BZIU2O7KL3Y2';

function convert(str) {
	let result = '';
	let prev = str[0];
	let count = 0;
	for(const val of str) {
		if(val === prev) {
			count ++;
		} else {
			result += prev + (count > 1? count: '');
			console.log(prev)
			prev = val;
			count = 1;
		}
	}
	result += prev + (count > 1? count: '');
	return result;
}


function convert1(str) {
	let arr = str.split('');
	let temp = [];
	arr.reduce((acc, el, index) => {
		if(!acc) {
			// первый вход
			acc = {value: el, count: 1}
		} else {
			if(el === acc.value) {
				acc.count ++
			} else {
				temp.push(acc.value)
				if(acc.count > 1) {
					temp.push(acc.count)
				}
				acc = {value: el, count: 1}
			}
		}
		// Последний круг
		if(index == arr.length - 1) {
			temp.push(acc.value)
			if(acc.count > 1) {
				temp.push(acc.count)
			}
		}
		return acc
	}, null)
	return temp.join('')
}
