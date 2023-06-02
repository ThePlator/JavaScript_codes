// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing comon array operations .

/* In JavaScript, arrays aren't primitives but are instead Array object with following core characteristcs:

-> JavaScript arrays are resizable and can contain a mix of different data types.

-> JavaScript aarays are not associative arrays and so, array elements cannot be accessed using arbitrary string as indexes, but must be accessed using nonnegative integers as indexes.

-> JavaScript arrays are zero-indexed : the first element of an array is at index '0', the second is at index '1', and so on-- and the last element is at the value of the array's length property minus '1'.

-> JavaScript array-copy operations create shallow copies. */

/* Creating an Array

using an array literal is the easiest way to create a JavaScript array

syntax:

const array_name = [item1, item2, .........]; */

//First method:-

let a = ['1','2','3','4'];

console.log(a, typeof(a));

// Another method:-

let b = [];
b[0] = '2';
b[1] = '5';
b[2] = '6';
b[3] = '9';

console.log(b, typeof(b));

/* Using the JavaScript Keyword new 

The folloeing example also creates an Array, and assigns value to it: */

const c = new Array('5','7','9','11');

console.log(c, typeof(c));

/* Converting an Array to a String

The JavaScript method toString() converts an array to a  string of (comma separated) array values: */

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits, typeof(fruits));

const d = fruits.toString();

console.log(d, typeof(d));

/* The length Property

The length proprty of an array returns the length of an array */

console.log(c.length); //4

// Array methods

let x;

const arr = [28,38,44,29,109];

// push() - Push a value on to the end of the array

arr.push(100);

// pop() - Take the last value off

arr.pop();

// unshift() - Add a value to the beginning of the array

arr.unshift(99);

// shift() - Remove first value 

arr.shift();

// reverse() - Reverse an array

arr.reverse(); // [109, 29, 44, 38, 28]

// includes() - Check to see if something is in the array

x = arr.includes(455);

// indexOf() - Return the index of the first match

x = arr.indexOf(28);

// Return array as a string

x = arr.toString();
x = arr.join();

// slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.

x = arr.slice(1, 4);

// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not

x = arr.splice(1, 4);

// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.

x = arr.splice(4, 1);

// Chaining methods - Some methods can be chained depending on the return value.
x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x);