const cartItems = ["Book1", "Book2", "Book3", "Book4"];

cartItems.shift();
cartItems.splice(1, 1);
cartItems.push("New Book");
console.log(cartItems);
cartItems.forEach(function (item, index) {
	console.log(`index[${index + 1}]-Product name :${item}`);
});
