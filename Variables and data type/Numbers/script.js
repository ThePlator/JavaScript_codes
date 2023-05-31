//Number 

const num = new Number(20); 

const num1 = 20;

console.log(num1,typeof num1); // 20  'number'

console.log(num, typeof num); // number {20}   'object'

// toString() - returns a string representation of the number 

let x = num.toString();

console.log(x);

//toFixed() - returns a string representation of the number with a specified number of decimal

let num2 = 3.14567

console.log(num2.toFixed(2)); // 3.15
console.log(num2.toFixed(3)); // 3.146

// toPrecision() - returns a number with the specified length

let num3 = 8.9696
console.log(num3.toPrecision(3)); // 8.97

// toExponential() - convert a number to exponentoial notation and return its value as a string
let num4 = 3.1456

console.log(num4.toExponential(2));  // 3.15e+0

// toLocaleString() - returns a string representation of the number, using the current locale
console.log(num4.toLocaleString('eg-US'));//3.146

// valueOf - Get value
console.log(num4.valueOf());

// The Number object itself has some properties and methods

//largest and smallest possible number

console.log(Number.MAX_VALUE); //1.7976931348623157e+308

console.log(Number.MIN_VALUE); //5e-324