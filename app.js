let num = 65.1;
let res = num.toFixed(5);
// console.log(res);

// console.log(Math.round(num))
console.log(Math.floor(num));
console.log(Math.ceil(num));

let randomNumber = Math.random();
console.log(randomNumber);

let num1 = 100;
let num2 = 200;
let randomBetweenTwoNum = num1 + Math.round(Math.random() * (num2 - num1));
console.log(randomBetweenTwoNum);
