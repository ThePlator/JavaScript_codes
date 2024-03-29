/*Introduction to the DOM
The Document Object Model(DOM) is the data representation of the objects that comprise the structure and content of a document on the web.
This guide will introduce the DOM, look at how the DOM represents an HTML document in memory and how to use the APIs to create web content and applications.

What is the DOM?
The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style. and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with page.

A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the DOM representation allows it to be manupulated. As an Object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.
*/

//Global window object
console.log(window);

//The document object is part of the window object
console.log(window.document);

//we can access DOM elements directly with properties
console.log(document.body);
console.log(document.links[0]);
