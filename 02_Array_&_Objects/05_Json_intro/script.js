/* JSON stands for JavaScript Object Notation 

JSON is a lightweight format for storing and transporting data

JSON is often used when data is sent from a server to a web page 

JSON is "Self-describing" and easy to understand
*/

const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
};

// Convert to JSON string

const str = JSON.stringify(post);

console.log(str);

// Parse JSON

const obj = JSON.parse(str);

console.log(obj);

// JSON & arrays 
const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body',
    },
];

const str2 = JSON.stringify(posts);

console.log(str2);

// Object Challenge 
/*
Step 1
Create an array of objects called library. Add 3 objects with a property of title, author, status. Title and author should be strings (whatever value you want) and status should be another object with the properties of own, reading and read. Which should all be boolean values. For all status, set own to true and reading and read to false.

Step 2
You finished reading all of the books. Set the read value for all of them to true. Do not edit the initial object. Set the values using dot notation.

Step 3
Destructure the title from the first book and rename the variable to firstBook

Step 4
Turn the library object into a JSON string
*/

// Solution :=>

// Step 1
const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Mockingjay',
    author: 'Suzanne Collins',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
const { title: firstBook } = library[0];

console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);