const cartItems = ["Book1", "Book2", "Book3", "Book4"];

cartItems.push("Book5"); // Add to the first of the array
console.log(cartItems);

const removeLastItem = cartItems.pop(); // Delete from the end of the array and return removed item
console.log(removeLastItem);
console.log(cartItems);

cartItems.unshift("Book0");
console.log(cartItems);

cartItems.shift()
console.log(cartItems);

const res= cartItems.splice(1,2,'new item','new items',2)
console.log(cartItems);
console.log(res);
