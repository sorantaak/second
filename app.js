let message = function () {
	console.log("Welcomme!!");
};
message();
message();
message();

let userId = function (id) {
	console.log(id);
};

userId(20);
let userId2 = function (id) {
	let res = `User id is ${id}`;
	return res;
};
let showResult = userId2(765);
console.log(showResult);
console.log(userId2(5656));
