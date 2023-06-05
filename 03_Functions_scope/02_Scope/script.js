// 'window' is globally scoped 
// alert('Hello');
//console.log(innerwidth);

// Global scope variable 
const x = 100;
console.log(x, 'in global');

function run(){
    //Access global vars in functions 
    console.log(window.innerHeight);
    console.log(x, 'in function');
}

run();

// Access global vars in blocks
if(true){
    console.log(x, 'in block');
}

function add(){
    // Overwriting global x (variable shadowing)
    const x = 1;
    const y = 50;
    console.log(x+y);
}

// can not access a funcation scoped variable in global scope
console.log(y);

add();

// An if statement is a block 
if(true){
    console.log(x);
    const y  = 200;
    console.log(x+y);
}

// console.log(y); // ReferenceError: y is not defined

// A loop is a block
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i); // ReferenceError: i is not defined

// Using var
if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(c); // var is global for block 

// var IS function scoped
function run() {
  var d = 100;
  console.log(d);
}

run();

// console.log(d);


const foo = 1;
var bar = 2; // Put on the window object

function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  // console.log(y);

  second();
}

first();

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }

  console.log(y);
}

// Function Declaration
function addDollarSign(value) {
  return '$' + value;
}

// When using declarations, you can invoke the function before the declaration. With expressions, you can not
console.log(addDollarSign(100));

// Function Expression
const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(200));