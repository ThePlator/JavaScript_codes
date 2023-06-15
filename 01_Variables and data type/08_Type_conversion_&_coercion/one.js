/* Type Coercion refers to the process of automatic or implicit conversion of the values from one data type to another. This includes conversion from Number to String, String to Number, Boolen to Number etc. when different types of operators are applied to the values 

 1. Number to String Conversion: When any string or non-string value is added to a string, it always converts the non-string value to a string implicitly. */
// The Number 10 is converted to
// string '10' and then '+'
// concatenates both strings
var x = 10 + '20';
var y = '20' + 10;

// The Boolean value true is converted
// to string 'true' and then '+'
// concatenates both the strings
var z = true + '10';

console.log(x); //1020
console.log(y); //2010
console.log(z); //true10
/* 2. String to Number Conversion: When an operation like subtraction (-), multiplication (*), division (/) or modulus (%) is performed, all the values that are not number are converted into the number data type, as these operations can be performed between numbers only.*/

// The string '5' is converted
// to number 5 in all cases
// implicitly
var w = 10 - '5';
var x = 10 * '5';
var y = 10 / '5';
var z = 10 % '5';

console.log(w); // 5
console.log(x); // 50
console.log(y); // 2
console.log(z); // 0

/* 3. Boolean to Number: When a Boolean is added to a Number, the Boolean value is converted to a number as it is safer and easier to convert Boolean values to Number values. */

// The Boolean value true is
// converted to number 1 and
// then operation is performed
var x = true + 2;

// The Boolean value false is
// converted to number 0 and
// then operation is performed
var y = false + 2;

console.log(x); // 3
console.log(y); // 2

/* 4. The Equality Operator: The equality operator (==) can be used to compare values irrespective of their type.*/

// Should output 'true' as string '10'
// is coerced to number 10
var x = 10 == '10';

// Should output 'true', as boolean true
// is coerced to number 1
var y = true == 1;

// Should output 'false' as string 'true'
// is coerced to NaN which is not equal to
// 1 of Boolean true
var z = true == 'true';

console.log(x); // True
console.log(y); // True
console.log(z); // False
