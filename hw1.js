// Task 1
/*
Given a positive integer. Bring the last digit of the number to the beginning. Print the new
number. If the last digit of the inserted number is 0, number remains the same.
*/


function changeNumberPlace(number) {
	let lastDigit = number % 10;
	let allNumExcLast = (number - lastDigit) / 10; //все цифры кроме последнего.

	let resultNum = '';

	if (lastDigit !== 0) {
		resultNum = `${lastDigit}${allNumExcLast}`;
	} else {
		resultNum = number;
	}

	return +resultNum;
}

changeNumberPlace(1234486);



// Task 2
/*
Given three numbers. Sort them by the ascending order.
*/


function sortAscending(num1, num2, num3) {
	if (num1 > num2) {
		num1 = num1 + num2;
		num2 = num1 - num2;
		num1 = num1 - num2;
	}
	if (num2 > num3) {
		num2 = num2 + num3;
		num3 = num2 - num3;
		num2 = num2 - num3;
	}
	if (num1 > num2) {
		let temp = num1;
		num1 = num2;
		num2 = temp;
	}

	let result = `${num1} ${num2} ${num3}`;
	return result;
}
sortAscending(-45, 0, 15);

// Task 3
/*
Given the following code rewrite it using only two if operators. (Hint: use logical
operators).
*/

var n = +prompt();

var i = 0;
var j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)) {
	i += 1;
}
if (n % 3 === 0 && n % 10 === 1) {
	j += 1;
}

// Task 4
/*
Write a program which will compute the area of a rectangular or a triangle after
prompting the user to type the name of the figure name. Also check that entered
numbers are positive.
For the triangle entered numbers are height and and base.
*/

function calculateArea(figure, widthFigure, heightFigure) {

	let result = '';

	const areaOfTriangle = 0.5 * widthFigure * heightFigure;
	const areaOfRectangle = widthFigure * heightFigure;

	if (widthFigure > 0 && heightFigure > 0) {
		if (figure === 'triangle') {
			result = areaOfTriangle;
		} else if (figure === 'rectangle') {
			result = areaOfRectangle;
		} else {
			result = "Enter the correct figure's name!"
		}
	} else {
		result = 'Enter only positive numbers!';
	}

	return result;
}

calculateArea('rectangle', 1, 4);


//Task 5
/*
Given an object. Invert it (keys become values and values become keys). If there is
more than key for that given value create an array.
*/

function invertObject(obj) {
	const invertedObj = {};

	for (const key in obj) {
		const value = obj[key];

		if (invertedObj.hasOwnProperty(value)) {
			if (Array.isArray(invertedObj[value])) {
				invertedObj[value].push(key);
			} else {
				invertedObj[value] = [invertedObj[value], key];
			}
		} else {
			invertedObj[value] = key;
		}
	}

	return invertedObj;
}

// Example usage:
const obj = {
	a: 1,
	b: 2,
	c: 1,
	d: 3
};

const inverted = invertObject(obj);
console.log(inverted);


/*
В чём суть:
С перва проверяем имеет ли наш "новый, инвертированный" объект, собстсвенное свойство с ключём,
который у старого объекта является значением свойства. Это происходит в строке 10.

Если есть такой ключ, проверяем его значение, через Array.isArray:
1) Если его значение является массив, то пушим в этот массив key старого объекта.
2) Если это не массив, мы создаем массив, в нём будет то значение которое уже было + key старого объекта.

Если такого ключа нету, то мы просто, создаём новое свойство для инвертированного объекта, как ключ задаём ему, значение старого объекта,
а как value зададим key старого объекта. То есть мы в новом объекте, просто меняем местами key:value на value:key.
*/

