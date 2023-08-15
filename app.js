let validEmail = true;
let validPassword = false;

if (validEmail && validPassword) {
	console.log("logged in");
} else if (validEmail || validPassword) {
	console.log("Is correct!");
}

let isUser = true;
let userRole = "admin";
if (isUser) {
	console.log("Welcome user");
} else if (userRole === "admin") {
	console.log("Welcome admin");
} else {
	console.log("welcome");
}
