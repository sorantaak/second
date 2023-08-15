let getUserInfo = function (name = "Test", id = 2) {
	return `name: ${name} Id:${id}`; // use template string in this line
};
console.log(getUserInfo("Soran", 50));
console.log(getUserInfo());
