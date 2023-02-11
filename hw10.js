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









/*
3. Write classes: Person, Student, Staff.
Person should have: firstName, lastName, gender, age.
It should have appropriate getters and setters.
It should have a method: toString().
Student is inherited from Person. It should have program(array of strings), year, fee.
It should have appropriate getters and setters.
It should have method: passExam(program, grade). Student should contain the data
about its programs and exams. passExam will update that data, so if student passed all
the exams(grade is great or equal to 50), its year should be increased by one.
It should have a toString method.
Teacher is inherited from Person. It should have program(string), pay.
It should have appropriate getters and setters.
It should have a toString method.
*/

class Person {
	constructor(firstName, lastName, gender, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.age = age;
	}


	get getFullName() {
		return this.firstName + " " + this.lastName;
	}

	get name() {
		return this.firstName;
	}
	set name(newName) {
		this.firstName = newName;
	}

	get lname() {
		return this.lastName;
	}
	set lname(newLname) {
		this.lastName = newLname;
	}

	get gen() {
		return this.gender;
	}
	set gen(newGender) {
		this.gender = newGender;
	}

	get agee() {
		return this.age;
	}
	set agee(newAge) {
		this.age = newAge;
	}

	toString() {
		return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
	}
}

class Student extends Person {
	constructor(firstName, lastName, gender, age, program, year, fee) {
		super(firstName, lastName, gender, age);
		this.program = program;
		this.year = year;
		this.fee = fee;
		this.dataAboutExam = [];
	}

	passExam(program, grade) {
		this.dataAboutExam.push({ program, grade });
		let done = false;

		this.dataAboutExam.forEach((exam) => {
			if (exam.grade >= 50) {
				done = true;
			}
		})

		if (done) {
			this.year++;
		}
	}

	toString(){
		return `${super.toString()}. ${this.firstName} is studying ${this.program}.`;
	}
}

const student1 = new Student('Morgan', 'Freeman', 'male', 21, ['mathematica', 'english', 'history'], 1, 800000);


class Staff extends Person {
	constructor(firstName, lastName, gender, age, program, pay) {
		super(firstName, lastName, gender, age);
		this.program = program;
		this.pay = pay;
	}

	get prog() {
		return this.program;
	}
	set prog(value) {
		this.prog = value;
	}

	get payment() {
		return this.pay;
	}
	set payment(value) {
		this.pay = value;
	}

	toString() {
		return `${super.toString()}. Lecturer of ${this.program}`;
	}
}

const staff1 = new Staff('Anna', 'Ivanovna', 'female', 36, 'History', 250000);





