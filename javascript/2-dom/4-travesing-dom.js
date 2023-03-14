//  The entire document is a document node
// Every HTML element is an element node
// The text inside HTML elements are text nodes
// Every HTML attribute is an attribute node (deprecated)
// All comments are comment nodes 


let val;

const list = document.querySelector(".collection");
const listItem = document.querySelector("li.collection-item:last-child");

val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
val = list.childNodes[1].nodeType;

// 1 - Element
// 3 - Text Node
// 8 - comment

// Get Childern element nodes

val = list.children;
val = list.children[0];
val = list.children[0].textContent = "Hello";
val = list.children[0].className;

// First Child

val = list.firstChild;
val = list.firstElementChild; //***/

// LastChild
val = list.lastChild;
val = list.lastElementChild;

// Count child Element
val = list.childElementCount;

// Get a Parent Node

val = listItem.parentNode;
val = listItem.parentElement.parentElement;

// Get Previos Sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

// Get Next Sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

console.log(val);