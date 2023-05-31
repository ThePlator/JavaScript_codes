/*let x;

// Square root
x = Math.sqrt(9);

// Absolute value
x = Math.abs(-5);

// Round
x = Math.round(4.2);

// Round up
x = Math.ceil(4.2);

// Round down
x = Math.floor(4.9);

// Exponent
x = Math.pow(2, 3);

// Minimum number
x = Math.min(4, 5, 3);

// Maximum number
x = Math.max(4, 5, 3);

// Get a random number/decimal between 0 and 1
x = Math.random();

// Get a random number between 1 and 100
x = Math.floor(Math.random() * 100 + 1);

console.log(x); */

//challenge 

let a = Math.floor(Math.random()*100 + 1);
let b = Math.floor(Math.random() * 50 + 1);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
let c = a%b;
console.log(`${a} % ${b} = ${c} `);
// Answer is not same as another method because the variable are not same 

// Another Method 

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

// Get the sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

// Get the difference
const diff = x - y;
const diffOutput = `${x} - ${y} = ${diff}`;
console.log(diffOutput);

// Get the product
const prod = x * y;
const prodOutput = `${x} * ${y} = ${prod}`;
console.log(prodOutput);

// Get the quotient
const quot = x / y;
const quotOutput = `${x} / ${y} = ${quot}`;
console.log(quotOutput);

// Get the remainder
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;
console.log(rmOutput);