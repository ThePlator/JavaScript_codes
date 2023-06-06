// IIFE -> Immediately Invoked function Expressions

/* 
Functions are one of the bulding blocks of any programming language and JavaScript has taken these Functions to a whole new level.Functions are to be a collection of statements to executed in a proper sequence in a particular context. Now JavaScript provides a variety pf methods to define and execute Functions, there are named functions and anonymous funcations, and then there are Functions and anonymous funcations, and then there are functions that are executed as soon as they are mounted, these funcations are known as Immediately Invoked Function Expressions or IIFEs. 

syntax: IIFEs follow a particular syntax as shown below 

(function(){
    Funcation logic here.
})()


Why the name Immediately Invoked Function Expressions?

-> Immediately Invoked: This part is easy to exaplain and demonstrate. This type of function is called immediately invoked as there functions are executed as soon as they are mounted to the stack, it requires no explicit call to invoke the function. If we look at the syntax itself we have two pairs of parentheses, the first one contains the logic to be executed and the second one is the generally what we include when we invoke a function, the second parenthesis is responsible to tell the compiler that the function expression has to be executed immediately.

-> Function Expressions: It is simple to understand that a Function Expression is a Function that is used as an expression.JavaScript lets us use Functions as Function Expressions if we Assign the Function to a variable,wrap the Function within parenthese or put a logical not in front of a function. The following program illustrates the different ways we can create a Function Expression.
*/

// Creating Function Expression by assigning to a variable.
var myFunc = function() { return "Hii"; };
  
// Creating Function Expression Using Logical Not.
!function() { return "hii"; };
  
// Creating Function Expression Using Parentheses.
(function() { return "hii"; });

/* 
Now if you look at the third example code it is identical to the first part of the syntax of an IIFE, hence we can conclude that the first part of the IIFE contains a Function Expression while the final part invokes it immediately.
*/


// Regular Function.
function Greet() {
    console.log("Hello World");
};
// Execution of Regular Function.
Greet();
  
// IIFE creation and execution.
(function() {
    console.log("Hello World");
})();

/*
Important Points:-
IIFE follow their own scope like any other funcation/variable is JavaScript. The part of the name immediately invoked is sometimes confusing to new developers as they expect the IIFE to execute irrespective of the function scope, this id wrong. For example, let us take the following example where the IIFE id defined within a function and will only be immediately invoked if we call it the Parent Function.
*/

function myFunc()
{
    console.log("Welcome to");
    // This will be executed after executing the previous log.
    (function() { console.log("Hello World..."); })();
    console.log("Hi There!");
}
      
// Calling the Function.
myFunc();


/*
1. IIFEs have their own scope i.e. the variables you declare in the Function Expression will not be available outside the function.
2. Similarly to other functions IIFEs can also be named or anonymous, but even if an IIFE does have a name it is impossible to refer/invoke it.
3. IIFEs can also have parameters. For example, 
*/

// Declaring the parameter required.
(function(dt) {
    console.log(dt.toLocaleTimeString());
    // Passing the Parameter.
})(new Date());