function maxSubArray(arr, num) {    // O(N**2)
	// Принимает первым аргументом массив чисел, вторым - число
	// Возвращает максимальную возможную сумму элементов массива, в количестве равным 2-ому аргументу
	if(!arr.length || ! num || num > arr.length) {
		return null
	}
	let max = -Infinity;
	for(let i = 0; i < arr.length - num + 1; i++) {
		let temp = 0;
		for(let j = 0; j < num; j++) {
			temp += arr[i + j]
		}
		if(temp > max) {
			max = temp;
		}
	}
	return max;
}
function maxSubArray1(arr, num) {   // O(N)
	if(!arr.length || ! num || num > arr.length) {
		return null
	}
	let maxSum = 0;
	let tempSum = 0;
	for(let i = 0; i < num; i++) {
		// Формируем окно
		maxSum += arr[i]
	}
	tempSum = maxSum;
	for(let i = num; i < arr.length; i++) {
		// Сдвигаем окно и ищем максимальный результат
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum
}

console.log(maxSubArray([1,2,3,4,5,6,7], 3))
console.log(maxSubArray1([1,2,3,4,5,6,7], 3))
