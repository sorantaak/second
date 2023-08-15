let sum = function (num1, num2, num3) {
	let res = num1 + num2 + num3;
	return res;
};

let showResult = sum(10, 20, 69.65);
console.log(showResult);

let getUserInfo = function (name = "Test", id = 2) {
	return `name: ${name} Id:${id}`;
};
console.log(getUserInfo("Soran", 50));
console.log(getUserInfo());
