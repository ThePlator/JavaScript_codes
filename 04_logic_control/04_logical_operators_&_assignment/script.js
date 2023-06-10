console.log(10 < 20 && 30 > 15 && 40 > 30); // Must all be true
console.log(10 > 20 || 30 < 15); //Only one has to be true

// && - will return first falsy or last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);

const posts = ['Post one', 'Post two'];
posts.length > 0 && console.log(posts[0]);

// || - will return the first truthy value or the last value

let b;
b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);

//??-Returns the right side operand when the left is null or undefined
let c;
c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;

console.log(c);

// Assingments operators

// ||= assings the right side value id the left is a falsy value.

let d = null;

/*if (!d) {
  d = 10;
}*/

//d = d || 10;
d ||= 10;

console.log(d);

// &&= assings the right side value only if the is a truthy value.

let e = 10;

if (e) {
  e = 20;
}

e = e && 20;

e &&= 20;

console.log(e);

// ??= assings the right side value if the left is null or undefined.

let f = null;

if (f === null || c === undefined) {
  c = 20;
}

c = c ?? 20;

console.log(c);

// Ternary Operator
const age = 17;

// Using an if statement
if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote');
}

// Using a ternary operator
age >= 18 ? console.log('You can vote!') : console.log('You can not vote');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote';

console.log(canVote);
console.log(canVote2);

// Multiple statements

const auth = true;

// Long version
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

// Shorter ternary version
const redirect = auth
  ? (alert('Welcome to the dashbaord'), '/dashboard')
  : (alert('Access Denied'), '/login');

console.log(redirect);

// Ternary with no else
auth ? console.log('Welcome to the dashboard') : null;
// Shorthand for ternary with no else
auth && console.log('Welcome to the dashoard');
