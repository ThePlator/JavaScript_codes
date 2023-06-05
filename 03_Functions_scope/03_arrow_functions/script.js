// Normal function declaration
// function add(a,b){
//       return a+b;    
// }

// Arrow function syntax
const add = (a, b) =>{
    return a + b;
};

console.log(add(1, 2));

//Implicit Return
const substract = (a, b) => a - b;

console.log(subtract(10, 5));

// can leave off () with a single param
const double = a => a*2;

console.log(double(10));

// Returning an object
const creatObj = () => ({
    name: 'Brad',
});

console.log(createObj());

const number = [1,2,3,4,5];

number.forEach(function(n){
    console.log(n);
})

// Arrow function in a callback
number.forEach((n) => console.log(n));