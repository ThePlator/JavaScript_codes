const d = new Date(10, 30, 2022, 6, 0, 0);
const hour = d.getHours();

if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good night');
}

// Nested If
if (hour < 12) {
  console.log('Good Morning');

  if (hour === 6) {
    console.log('Wake Up!');
  }
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');

  if (hour >= 20) {
    console.log('zzzzzzzz');
  }
}

if (hour >= 7 && hour < 15) {
  console.log('It is work time!');
}

if (hour === 6 || hour === 20) {
  console.log('Brush your teeth!');
}

// Switches

const c = new Date(2022, 1, 10, 19, 0, 0);
const month = c.getMonth();
const Hour = c.getHours();

// Immediate value evaluation
switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('It is March');
    break;
  default:
    console.log('It is not Jan, Feb or March');
}

// Range evaluation
switch (true) {
  case Hour < 12:
    console.log('Good Morning');
    break;
  case Hour < 18:
    console.log('Good Afternoon');
    break;
  default:
    console.log('Good Night');
}

// Calculator Challenge

/*Instructions:

Create a function called calculator that takes three parameters: num1, num2 and operator. The operator can be +, -, * or /. The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message.

Example:

calculator(5, 2, '+') // returns 7
calculator(5, 2, '-') // returns 3
calculator(5, 2, '*') // returns 10
calculator(5, 2, '/') // returns 2.5
calculator(5, 2, '&') // returns an error message

Hint:
You can use an if statement for the operator, but this is also a good example for using a switch statement. */

function calculator(num1, num2, x) {
  switch (x) {
    case '+':
      console.log(num1 + num2);
      break;
    case '-':
      console.log(num1 - num2);
      break;
    case '*':
      console.log(num1 * num2);
      break;
    case '/':
      console.log(num1 / num2);
      break;
    default:
      console.log('Error');
  }
}

calculator(5, 2, '+');
calculator(5, 2, '-');
calculator(5, 2, '*');
calculator(5, 2, '/');
calculator(5, 2, '&');
