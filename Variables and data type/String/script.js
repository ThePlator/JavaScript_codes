// The string object is used to represent and manipulate a sequence of characters.

// Creating Strings

// String can be created as primitives, from string literals, or as objects, using to String() constructor:

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

const string4 = new String("A String object");

console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);

// String literals can be specified using single or double quotes, which are treated identically, or using the backtick character |`|. This last form specifies a template literal: with this form you can interpolate expressions.

let x;

const name = 'Ajay';
const age = 32;

// Concatenation
 
x ='Hello, my name is ' + name +' and I am ' + age +' years old';
console.log(x);

// Template literals

let y = `Hello, my name is ${name} and I am ${age} years old`;

console.log(y);

// Shows the prototype of the string object, Shows the properties and methods

let z = name.__proto__;
console.log(z);

//Character access

console.log('cat'.charAt(1)); // a is the output

console.log('cat'[2]); // t is the output

// Comparing Strings 

const a = 'a';
const b = 'b';
if(a<b) // true 
{
    console.log(`${a} is less than ${b}`); 
}
else if(a>b)
{
    console.log(`${b} is less than ${a}`);
}
else 
{
    console.log(`${a} and ${b} are equals`);
}
// Case insensitive comparison

let str1 = 'hello';
let str2 = 'Hello';
// A common way to compare strings case-insensitively is to convert both to the same same case(upper or lower) before comparing them.
let p = str1.toUpperCase() === str2.toUpperCase();
console.log(p); //true

// The choice of whether to transform by the toUpperCase() or toLowerCase() is mostly arbitrary, and neither one is fully robust when extending beyond the latin alphabet.

// A local-aware and robust solution for testing case-insensitive euality is to use the Intl.Collator API or the string's localeCompare(). method -- they share the same interface -- with the sensitivity option set to "accent" or "base".

const areEqual = (st1,st2, locale = "en-US") => st1.localeCompare(st2, locale, { sensitivity: "accent"}) === 0;

console.log(areEqual("ß", "ss", "de")); //false

console.log(areEqual("ı", "I", "tr")); // true

// The localeCompare() method enables string comparison in a similar fashion as strcmp() -- it allows sorting string in a locale-aware manner.


/* String primitives and String objects :->

Note that JS distinguishes between string objects and primitive string values.(The same is true of Boolean and Numbers.)

String literals (denoted by double or single quotes) and string returned from string calls in a non-constructor context (that is, call without using the new keyword) are promitive strings. in contexts where a method is to be invoked on a primitive string or a property lookup occurs, JS will automatically wrap the string primitive and call the method or perform thr proprty lookup on the wrapper object instead.
*/

const strPrim = 'foo'; // A literal is a string primitive
const strprim2 = String(1);// coerced into the string primitive '1'
const strprim3 = String(true);// coerced into the string primitive 'true'
const strobj = new String(strPrim);// String with new returns a string wrapper object.

console.log(typeof strPrim);   //"string"
console.log(typeof strprim2); // "string"
console.log(typeof strprim3);//"string"
console.log(typeof strobj); //"object"

// String primitives and string objects also give different results when using eval(). Primitives passed to eval are treated as source code; string objects are treated as all other objects are, by returning the object. For example:
const s1 ="2+2"; // creates a string primitive
const s2 = new String("2+2");//creates a string object

console.log(eval(s1)); // returns the number 4

console.log(eval(s2)); //return the string "2+2"

// A string object can always be converted to its primitive counterpart with the valueof() method

console.log(eval(s2.valueOf())); // return the number 4

// indexof() - returns the index of the first occurrence of a specified value in a string

console.log('sameer'.indexOf('m'));  // 2

//substring() - search a string for a specified value 

console.log('hello world'.substring(2,5)); // llo
console.log('hello world'.substring(7)); // orld

// slice() - extracts a part of a string and returns a new string 
 
console.log('hello world'.slice(-11, -6)); // hello

//trim() - remove whitespace from beginning and end of string

console.log('          hello world'.trim()); // hello world

// replace() - replace all instances of a string

console.log('hello world'.replace('world', 'sameer')); // hello sameer

// includes() - returns true if the string is found 

console.log('hello world'.includes('hell')); //true 

// split() - returns an array of strings

console.log('hello world'.split('')); //['h' , 'e', 'l', ..... , 'd']