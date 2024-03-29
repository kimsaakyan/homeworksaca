/* TASK 1
Given an array. Write a recursive function that removes the first
element and returns the given array. (without using
arr.unshift(),assign second element to first, third element to second...)
*/

const randomArr = [17, 25]

function removeFirstElemInArr(arr, start = 0, deleteCount = 1, idx = 1, origLen = arr.length) {

	if (arr.length === 0) {
		return [];
	}

	let removed = arr.splice(start, deleteCount, arr[idx]);
	start++;
	idx++;

	if (arr[arr.length - 1] === undefined) {
		arr.splice(arr.length - 1, 1);
	}
	if (origLen - arr.length === 1) {
		return arr;
	}

	removeFirstElemInArr(arr, start, deleteCount, idx);

	return arr;
}

console.log(removeFirstElemInArr(randomArr));








/* TASK 2
Given an array of nested arrays. Write a recursive function that
flattens it. (Hint create function that concats arrays).
*/

let flattenArr = [];

function flattenMultidimensionalArray(arr, i = 0) {
	if (i !== arr.length) {
		if (Array.isArray(arr[i])) {
			flattenMultidimensionalArray(arr[i], 0)
		} else {
			flattenArr.push(arr[i])
		}
		i++;
		flattenMultidimensionalArray(arr, i);
	}

	return flattenArr;
}

console.log(flattenMultidimensionalArray([14, [1, [[[3, []]], 1], 0]]));

##Right Option
const arr = [1, [3, 4, [1, 2]], 10];

function flatten(arr, result = []) {
	arr.forEach((el) => {
		if (typeof el === 'number') {
			result.push(el);
		}
		if (Array.isArray(el)) {
			flatten(el, result);
		}
	})
	return result;
}

flatten(arr);



/* TASK 3
Given a number. Write a function that calculates its sum of the digits
and if that sum has more than 1 digit find the sum of digits of that number.
Repeat that process if needed and return the result.
*/

function recursiveSumOfDigits(num, sum = 0) {

	if (num !== 0) {
		let lastDigit = num % 10;
		num = (num - lastDigit) / 10;
		sum += lastDigit;
		return recursiveSumOfDigits(num, sum);
	}

	if (String(sum).length > 1) {
		return recursiveSumOfDigits(sum)
	}

	return sum;

}

console.log(recursiveSumOfDigits(29));



// Second option (Task 3)
function calcDigitsOfNumber(number) {

	let result = 0;

	while (number) {
		const lastDigit = number % 10;
		result += lastDigit;
		number = (number - lastDigit) / 10;
	}

	if (result / 10 <= 1) {
		return result;
	} else {
		return calcDigitsOfNumber(result);
	}
}




/* TASK 4
Given the list of the following readers:
[
{ book: &quot;Catcher in the Rye&quot;, readStatus: true, percent: 40},
{ book: &quot;Animal Farm&quot;, readStatus: true, percent: 20},
{ book: &quot;Solaris&quot;, readStatus: false, percent: 90 },
{ book: &quot;The Fall&quot;, readStatus: true, percent: 50 },
{ book: &quot;White Nights&quot;, readStatus: false, percent: 60 } ,
{ book: &quot;After Dark&quot;, readStatus: true, percent: 70 }
];
Output the books sorted by the percent in descending order which
readStatus is true and add ‘%’ char in the end for percent value.
*/

const readers = [
	{ book: 'Catcher in the Rye', readStatus: true, percent: 40 },
	{ book: 'Animal Farm', readStatus: true, percent: 20 },
	{ book: 'Solaris', readStatus: false, percent: 90 },
	{ book: 'The Fall', readStatus: true, percent: 50 },
	{ book: 'White Nights', readStatus: false, percent: 60 },
	{ book: 'After Dark', readStatus: true, percent: 70 },
];

let result = '';

const sorted = readers.sort((a, b) => {
	return b.percent - a.percent;
}).filter((book) => {
	if (book.readStatus === true) {
		return true;
	}
}).forEach((elem) => {
	result += `${elem.book} - ${elem.percent}% \n`;
})

console.log(result);

