/*
	Необходимо сделать генератор случаенный 16-ых чисел формата ['#000000' - '#FFFFFF']
*/
console.log(getRandomColor())

function getRandomColor() {
	return '#' + Math.floor((Math.random() * (2 ** 24))).toString(16).padStart(6, '0');
}
