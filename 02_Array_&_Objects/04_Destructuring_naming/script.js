// Setting object properties with the same name as a variable 
const firstName = 'Jhon';
const lastName = 'Doe';
const age = 30;

const person ={
    firstName,
    lastName,
    age,
};

console.log(person.age);

// Destructuring object properties 

const todo ={
    id: 1,
    title: 'Take out trash',
    user:{
        name: 'Jhon',
    },
};

const {
    id: todoId, // rename id to todoId
    title,
    user: { name },// destructuring multiple levels
} = todo;

console.log(todoId);

//Destructuring arrays & using the rest/spread opeator

const number = [23,67,33,49,52];

const [first, second, ...rest] = number;

console.log(first, second, rest);