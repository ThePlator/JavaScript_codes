let amount = '101';

//Convert string to number 
amount = parseInt(amount);
amount = Number(amount);
console.log(amount, typeof amount);

//Convert number to string
let number = 91;

number = number.toString();
number = String(number);

console.log(number, typeof number);


// convert string to decimal 

let new_number = '85.6';

new_number = parseFloat(new_number);

console.log(new_number, typeof new_number);

// convert number to boolean

let x = 1;

x = Boolean(x);

console.log(x, typeof x);

// way to get NaN

console.log(Math.sqrt(-1));
console.log(1+NaN);
console.log(undefined + undefined);
console.log('hii'/3);