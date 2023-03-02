let val;

// Number to string
val = String(555);
val = String(5 + 5);

// Bool ro string

val = String(true);

// Arr to string
val = String([1,2,3,4,5,"Hello"]);

// String to number

val = Number("5");
val = Number("5+5"); // NAN is a not an number

// Bool to number
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("Hello"); // NAN 
val = Number([1,2,3,4,5]); // NAN

val = parseInt("100.35");
val = parseFloat("100.38");

console.log(val);
console.log(typeof val);