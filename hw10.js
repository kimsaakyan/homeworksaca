/*
1. Create an Author class and a Book class.
Author should have: name, email, gender.
It should have appropriate getters and setters.
It should have a toString method.
Book should have: title, author(Author), price, quantity.
It should have appropriate getters and setters.
It should have a method: getProfit(), which calculates the profit from the book based on
the price and quantity.
It should have a toString method.
*/


class Author {
	constructor(name, email, gender) {
		this.name = name;
		this.email = email;
		this.gender = gender;
	}

	set rating(value) {
		this.score = value;
	}
	get rating() {
		return this.score;
	}

	set reviews(value) {
		this.text = value;
	}
	get reviews() {
		return this.text;
	}

	toString() {
		return `famous writer ${this.name}`;
	}
}

class Book extends Author {
	constructor(name, email, gender, title, price, quantity) {
		super(name, email, gender);
		this.title = title;
		this.price = price;
		this.quantity = quantity;
	}

	getProfit() {
		return `${parseInt(this.price) * this.quantity}$`;
	}
	toString() {
		return `The author of the book ${this.title} is ${super.toString()}.`;
	}

}

const book1 = new Book('Alexander Duma', 'none', 'male', '"The Count of Monte Cristo"', '5$', '4');

book1.rating = 5;
book1.reviews = 'Very good book.'
console.log(book1);






/*
2. Create an Account class. Account should have: id, name, balance.
It should have setters for name and balance, and getters for all fields.
It should have a method: credit(amount), which should add amount to balance and
return the updated balance.
It should have a method: debit(amount), which should subtract the amount from the
balance, if amount is less than the balance, otherwise output “Amount exceeded
balance.”
It should have a method: transferTo(anotherAccount, amount): which should subtract the
amount from the account balance and add it to the given anotherAccount and return the
updated balance, if amount is less than the balance, otherwise output “Amount
exceeded balance.”
It should have a static method: identifyAccounts(accountFirst, accountSecond) which
gets two accounts and identifies if they are the same or not comparing all fields.
It should have toString method.
*/

class Account {
	constructor(id, name, balance) {
		this._id = id;
		this.name = name;
		this.balance = balance;
	}

	get viewId() {
		return this._id;
	}

	get nickname() {
		return this.name;
	}
	set nickname(value) {
		this.name = value;
	}

	get bal() {
		return this.balance;
	}
	set bal(value) {
		this.balance = value;
	}

	credit(amount) {
		this.balance += amount;
		return this.balance;
	}
	debit(amount) {
		if (amount < this.balance) {
			return this.balance - amount;
		} else {
			return 'Amount exceede balance.'
		}
	}
	transferTo(anotherAccount, amount) {
		if (amount <= this.balance) {
			anotherAccount.balance += amount;
			this.balance = this.balance - amount;
			return `In ${this.name} account remained ${this.balance}$;`
		} else {
			return 'Amount exceede balance.';
		}
	}

	toString() {
		return `In the account: ${this.balance}`;
	}

	static identifyAccounts(accountFirst, accountSecond) {
		if (accountFirst._id === accountSecond._id) {
			return 'Identical accounts.'
		} else {
			return 'Different accounts.'
		}
	}
}

const alex = new Account(777, 'Alex', 10000);
const anna = new Account(888, 'Anna', 18000);


console.log(Account.identifyAccounts(alex, anna));

