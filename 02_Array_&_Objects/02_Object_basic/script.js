let x;

// Creating an object 
const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address:{
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['music', 'sports'],
};

// Accessing object properties 

x = person.name; // Dot notation
x = person['age'];// Bracket notation\
x = person.address.state;
x = person.hobbies[0];

//updating properties
person.name = 'Jane Doe';
person['isAdmin'] = false;

// Deleting properties
delete person.age;

// Create new properties 
person.hasChildren = true;

// Add function
person.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
}

person.greet();

// Key with multiple words
const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy',
};

x = person2['first name'];


console.log(x);