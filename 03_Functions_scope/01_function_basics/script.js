// Define a function
function sayHello(){
    console.log("Hello World...");
}

// Invoke, execute or call a function
sayHello();

// Define a function with parameters 
function add(num1, num2){
    console.log(num1+num2);
}

//Invoke funcation with arguments
add(5,10);

// Parameters vs Arguments 
// Parameters are the name of the variables that are used to pass data into a function.
//Arguments are the values that are passed into the function

// Returning a value 
function substract(num1, num2){
    return num1 - num2;

    console.log('After the return');//Not be readed
}

// Assign the returned value to a variable 
const result = substract(10,2);

console.log(result, substract(20,5));

//  Default params
function resisterUser(user = 'Bot'){
    // Old way - before using '='
    // if(!user){
    //    user = 'Bot';
    // }

    return user + ' is resgistered ';
}

console.log(resisterUser());


// Rest Params
function sum (...numbers){
    let total = 0;
    
    for(const num of numbers){
        total += num;
    }

    return total;
}

console.log(sum(1,2,34,5,67,88,92));

// Objects as params 
function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'John',
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: 'Sara',
  })
);

// Arrays as params 
function getRandom(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom([1,2,3,4,5,6,7,8,9,10]);