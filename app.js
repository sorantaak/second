let userInfo = {
	userId: 98,
	username: "SoranTaak",
	role: "admin",
};
console.log(`User role is ${userInfo.role}`);

// another test
let userInfoOne = {
	userId: 32,
	username: "SaharMohammadAmini",
	role: "author",
};
let userInfoTwo = {
	userId: 74,
	username: "AsrinTaak",
	role: "user",
};

let fetchUserData = function (user) {
	console.log(`User nam is: ${user.username}`);
};

fetchUserData(userInfoOne);
fetchUserData(userInfoTwo);
