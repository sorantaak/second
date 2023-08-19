const tasks = ["Task1", "Task2", "Task3", 2, true];
console.log(tasks);
console.log(tasks.length);
console.log(tasks[1]);

const cartItems = ["Book1", "Book2", "Book3"];
let res = `You have ${cartItems.length} products in your cart`;
console.log(res);

console.log(
	`your first item is ${cartItems[0]} and last item is ${
		cartItems[cartItems.length - 1]
	}`
);
