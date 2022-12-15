/* TASK 1
Given an array of integers, find the pair of adjacent elements that has the largest product and
return that product.
*/

function findMaxProductInArr(intArr) {
	let maxProduct = intArr[0] * intArr[1];

	for (let i = 1; i < intArr.length; i++) {
		if (intArr[i] * [intArr[i + 1]] > maxProduct) {
			maxProduct = intArr[i] * intArr[i + 1];
		}
	};

	return maxProduct;
};

console.log(findMaxProductInArr([4, 2, 8, 6, 3, 100])); // 300










/*TASK 2
Given an array of integers. All numbers are unique. Find the count of missing numbers between
minimum and maximum elements to make integers sequence.
*/

const arr = [2, 1, 6, 4, 8, 9];

function findCountOfMissingNumBetweenMinMax(uniqueArr) {
	let countMissingNum = 0;

	const sortArr = uniqueArr.sort((a, b) => a - b);

	for (let i = 0; i < sortArr.length - 1; i++) {
		if (sortArr[i + 1] - sortArr[i] !== 1) {
			countMissingNum++;
			sortArr.push(arr[i] + 1);
			sortArr.sort((a, b) => a - b);
		};
	};

	return countMissingNum;
}

console.log(findCountOfMissingNumBetweenMinMax(arr));








/* TASK 3
Implement built in array sort method using bubble sort algorithm. 
*/

const notSortArr = [1, 3, 2, 8, 45, 4, 64, 22, 84];

function mySortFunction(fn) {
	for (let k = 0; k < this.length; k++) {
		let swapped = false;
		for (let i = 0; i < this.length; i++) {
			if (fn(this[i], this[i + 1]) > 0) {
				let temp = this[i];
				this[i] = this[i + 1];
				this[i + 1] = temp;
				swapped = true;
			}
		}
		if (!swapped) {
			break;
		}
	}
	return notSortArr;
};

notSortArr.myFunc = mySortFunction;

console.log(notSortArr.myFunc(function func(a, b) {
	return a - b;
}));









/* TASK 4
Insert a n positive number. Print the n-st prime number.
*/

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		};
	};
	return num;
}

function getPrimeArr(lenPrimeArr, primeNumber) {
	let primeArr = [];
	for (let i = 1; i <= lenPrimeArr; i++) {
		if (isPrime(i)) {
			primeArr.push(i);
		};
	};

	if (primeNumber !== 0) {
		return primeArr[primeNumber - 1];
	};
}

console.log(getPrimeArr(100, 1));


