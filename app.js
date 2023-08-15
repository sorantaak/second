let isVlidPassword = function (password) {
	if (password.length > 8 && password.includes("12345")) {
		return true;
	} else {
		return false;
	}
};
console.log(isVlidPassword("sorantaak12345"));
console.log(isVlidPassword("sor1234dad"));
console.log(isVlidPassword("sorantaak12345"));
