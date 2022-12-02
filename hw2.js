/*--> TASK 1 <--*
Given two objects. Write a function that performs shallow compare.
*/

// С использованием Object.keys()
function shallowCompare(obj1, obj2) {
	let result = '';

	if (Object.keys(obj1).length === Object.keys(obj2).length) {
		for (let key in obj1) {
			for (let key2 in obj2) {
				if (obj2.hasOwnProperty(key) && (obj1[key] === obj2[key2])) {
					result = true
				} else {
					result = false;
				}
			}
		}
	} else {
		result = false;
	}

	return result;
}

console.log(shallowCompare({
	a: 1,
	b: 1
}, {
	b: 1,
	a: 2
}));



// БЕЗ использованием Object.keys()
function shallowCompare(obj1, obj2) {
	let result = '';
	let numberOfPropInObj1 = 0;
	let numberOfPropInObj2 = 0;

	for (let key in obj1) {
		for (let key2 in obj2) {
			if (key !== 'undefined') {
				numberOfPropInObj1++;
			}
			if (key2 !== 'undefined') {
				numberOfPropInObj2++;
			}

			if (obj2.hasOwnProperty(key) && (obj1[key] === obj2[key2])) {
				result = true
			} else {
				result = false;
			}
		}
	}
	return result;
}

console.log(shallowCompare({
	a: 1,
	b: 1
}, {
	b: 1,
	a: 1
}));



/* TASK 2
Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern
word&quot;) is a word or phrase without a repeating letter.
*/

function isIsogram(text) {
	if (text !== '') {
		let result = '';
		let arrText = text.split('');

		outer: if (arrText.length !== 1) {
			while (arrText.length !== 1) {
				let lastElem = arrText.pop();
				for (let i = 0; i < arrText.length; i++) {
					if (lastElem !== arrText[i]) {
						result = 'isogram'
					} else {
						result = 'not isogram'
						break outer;
					}
				}
			}
		} else {
			result = 'isogram'
		}
		return result;
	} else {
		return 'Введите слово или словосочетание!';
	}
}

console.log(isIsogram('ok'));



/* TASK 3
Given a number n ( n&gt;= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3,
5, 8 …, ak = ak-1 + ak-2)
*/

function printNthFibonacciNumber(n) {
	let fbNum1 = 0;
	let fbNum2 = 1;
	let temp = 0;

	if (n !== 0) {
		for (let i = 2; i <= n; i++) {
			temp = fbNum1 + fbNum2;
			fbNum1 = fbNum2;
			fbNum2 = temp;
		}
		return fbNum2;
	} else {
		return fbNum1;
	}
}

console.log(printNthFibonacciNumber(10));


/*TASK 4
Insert a number. Calculate product and sum of the digits of the number. If product is
divisible by the sum, print the quotient, otherwise print the remainder.
*/
function calc(number) {
	let sumOfDigits = 0;
	let productOfDigits = 1;
	let result = null;

	if (number !== 0) {
		while (number) {
			const lastDigit = number % 10;
			number = (number - lastDigit) / 10;

			sumOfDigits += lastDigit;
			productOfDigits *= lastDigit;
		}

		if (productOfDigits % sumOfDigits === 0) {
			result = `Quotient is ${productOfDigits / sumOfDigits}.`;
		} else {
			result = `Remainder is ${productOfDigits % sumOfDigits}.`;
		}
		return result;
	} else {
		return 'Cannot calculate.'
	}
}

console.log(calc(0))

/*TASK 5
Write a program to print X star pattern series.
 */

function createFigure(n) {
	let res = '';

	for (let i = 0; i <= n; i++) {
		for (let k = 0; k <= n; k++) {
			if (i === k || i + k === n) {
				res += '*';
			} else {
				res += ' ';
			}
		}
		res += '\n'
	}

	return res;
}
console.log(createFigure(4));





