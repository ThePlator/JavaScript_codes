//value is stored in the stack
const name = 'sameer';
const age = 30;

//Reference is stored in the heap
const person = {
    name: 'harsh',
    age: 20,
};

let newName = name;
newName = 'Jonathan';

let newPerson = person;
newPerson.name = 'Bradley';

console.log(name,newName); // sameer , Jonathan
console.log(person,newPerson); //{ name: 'Bradley', age: 20 }, { name: 'Bradley', age: 20 }