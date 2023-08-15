let userAccoutn = {
	fullName: "Soran Taak",
	outgo: 0,
	income: 0,
};

const addOutgo = function (account, amount) {
	account.outgo = account.outgo + amount;
};
const addIncome = function (account, amount) {
	account.income = account.income + amount;
};
const getAccountData = function (account) {
	let balance = account.income - account.outgo;
	return `Account name is : ${account.fullName} - balance is: ${balance}
    `;
};

addIncome(userAccoutn, 1000);
addOutgo(userAccoutn, 150);
addOutgo(userAccoutn, 250);
console.log(getAccountData(userAccoutn));
