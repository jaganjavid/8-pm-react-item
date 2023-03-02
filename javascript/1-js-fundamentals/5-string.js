const firstName = "Jagan";
const lastName = "Javid";
const age = 25;
const str = "Hello there my name is jagan";
const tags = "Web Dev,Web design,coding,programming";


let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "John";
// val = val + " Doe";
val += " Doe";

val = "Hello , My name is " + firstName + " and I am " + age;
 
// Length
val = firstName.length;

// Concat
val = firstName.concat(" ", lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Index

val = firstName[0];
val = firstName[1];
val = firstName[5];

// CharAt()
val = firstName.charAt("2");
val = firstName.charAt(firstName.length - 1);

// Slice ()

const fruit = "Banana";

val = fruit.slice(2, 4);
val = fruit.slice(-3);

// Split
val = str.split(" ");
val = tags.split(",");


// Replace
val = str.replace("jagan", "Javid");

// Includes
val = str.includes("Aurn");

val = " Hello ".trim();

console.log(val);