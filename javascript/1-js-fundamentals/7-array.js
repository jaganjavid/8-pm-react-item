// Create a array

// [];

const number = [5,65,4,3,6,3,123,54,6,576,87];
const number2 = new Array(3,123,54,6,576,87);

let val;

// Get Array length
val = number.length;

// ChecK if is Array
val = Array.isArray(number);

// Get a single value
val = number[6];

// Insert into array
// val = number[1] = 100;

// Find index of value
val = number.indexOf(65); // if array match is return the idex number if not -1

// Mutating Array

// Add on the end
// val = number.push(3000);

// Add on to front
// val = number.unshift(1000);

// Take off from end
// number.pop();
// number.pop();

// Take off from front
// number.shift();
// number.shift();

const fruits = ["apple", "orange", "Banana"];
console.log(fruits);
// Splice to remove
// fruits.splice(1,1);

// Splice to add
fruits.splice(2,1,"Lemon");

console.log(fruits);
