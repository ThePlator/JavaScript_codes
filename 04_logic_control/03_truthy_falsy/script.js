/* Falsy values:
- false
- 0
- "" or '' (Empty String)
- null
- undefined
- NaN


Truthy Values:
- Everything else that is not falsy
- true
- '0' (0 in a string)
- ' ' (Space in a string)
- 'false' (false in a string)
- [] (empty array)
- {} (empty object)
- function() {} (empty function)
*/

const x = function () {};

if (x) {
  console.log('This id truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats
const child = 3;

// Checking for literal 0
if (child) {
  console.log(`You have ${child} child.`);
} else {
  console.log('Please enter number of child');
} // for literal 0 the output will be else statement...... bcz 0 is falsy

// Solution:->

if (!isNaN(child)) {
  console.log(`You have ${child} child`);
} else {
  console.log('Please enter number of child');
}

// Checking for empty arrays
const posts = ['Post One'];

// Always true even when empty
if (posts) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}

// Solution
if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}

// Checking for empty objects
const user = {
  name: 'Brad',
};

// Always true, even when no properties
if (user) {
  console.log('List User');
} else {
  console.log('No User');
}

// Solution
if (Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No User');
}

// Loose Equality (==)
console.log(false == 0); // true
console.log('' == 0); // true
console.log(null == undefined); // true

// Strict Equality
console.log(false === 0); // false
console.log('' === 0); // false
console.log(null === undefined); // false
