/*TASK 1
Given an array of numbers which is almost sorted in ascending order.  Find the index
where sorting order is violated.
*/
function isSortArr(arr) {
	let res = ''
	let prev = arr[0];

	if (arr.length !== 0) {
		for (let i = 1; i < arr.length; i++) {
			if (prev > arr[i]) {
				res = `Порядок сломал элемент ${arr[i]} по индексу ${i}!`;
				break;
			} else if (prev <= arr[i]) {
				res = 'Массив сортирован по возрастанию!';
			}
			prev = arr[i];
		}
	} else {
		res = 'Массив не содержит никаких элементов!';
	}
	return res;
}

console.log(isSortArr([-9, -4, -4, 3, 12, 4, 5]));






/*TASK 2
Given an array consisting from the arrays of numbers (like a two-dimensional array).
Find sum of each row and print them as an array
*/

function findSumOfEachRow(arr) {
	const newArr = arr.map((elem) => {
		let sum = 0;
		if (Array.isArray(elem)) {
			for (let i = 0; i < elem.length; i++) {
				sum += elem[i];
			}
		} else {
			return elem;
		}
		return sum;
	});

	return newArr;
}

console.log(findSumOfEachRow([14, [2], [4, 5], [5, 5], 12, [13, 13]]));






/*TASK 3
Given an array of integers. Write a function that return new array from first array,
where removed even numbers, and odd numbers was multiplied with new array length
*/

function oddNumbersMultArrLength(arr) {
	let newArr = arr.filter(elem => elem % 2 !== 0);
	let newArr1 = newArr.map((elem, i, array) => elem * array.length);

	return newArr1;
}

console.log(oddNumbersMultArrLength([1, -2, 4, 6, 8, 2, 13, -17]));






/*TASK 4
Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced
elements starting from a to b spaced by step.
*/

function createArrFromAtoB(a, b, step) {
	let arr = [];

	for (let i = a; i <= b; i += step) {
		arr.push(i);
	}

	return arr;
}

console.log(createArrFromAtoB(1, 5, 0.5));









/*TASK 5
Given an array of numbers. Print frequency of each unique number. (Frequency is the
count of particular element divided by the count of all elements)
*/


// С методом forEach()
function printFrequencyEachUniqueNum(arr) {

	let countNumbers = {};
	let frequencyResult = '';

	arr.forEach((elem) => {
		if (countNumbers[elem] === undefined) {
			countNumbers[elem] = 1;
		} else {
			countNumbers[elem]++;
		}
	});

	for (let key in countNumbers) {
		frequencyResult += `${key}: ${countNumbers[key] / arr.length} \n`;
	}

	return frequencyResult;
}

console.log(printFrequencyEachUniqueNum([4, 4]));



/*Способ без forEach() */
function printFrequencyEachUniqueNum(arr) {

	let countNumbers = {};
	let frequencyResult = '';

	for (let elem of arr) {
		if (countNumbers[elem] === undefined) {
			countNumbers[elem] = 1;
		} else {
			countNumbers[elem]++;
		}
	}

	for (let key in countNumbers) {
		frequencyResult += `${key}: ${countNumbers[key] / arr.length} \n`;
	}

	return frequencyResult;
}

console.log(printFrequencyEachUniqueNum([4, 4]));






