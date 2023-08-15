let firstName = "soran";
if (true) {
	let lastName = "taak";
	console.log(lastName);
	if (true) {
		let age = 30;
		console.log(age);
	}
}

console.log(firstName);

///////// second check blocking
let name1 = "Test1";

if (true) {
	let name1 = "Test2";
	
	if (true) {
		let name1 = "Test3";
		console.log(name1);
	}
}
