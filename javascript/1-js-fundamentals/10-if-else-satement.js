// if(something){
//     do something
// } else {
//     do something else
// }


const id = 100;

// Equal

// Equal to value
if(100 == "100"){
    console.log("Yes you are correct")
} else {
    console.log("INcorrect");
}

// Not equal

if(100 != "101"){
    console.log("Yes you are correct")
} else {
    console.log("INcorrect");
}

// Equal to the value and type

if("100" === "100"){
    console.log("Yes you are correct")
} else {
    console.log("INcorrect");
}

if("100" !== 101){
    console.log("Yes you are correct")
} else {
    console.log("INcorrect");
}

// Test if UNDEFINED

let greet = "Hello";

if(typeof greet === "undefined"){
    console.log(`Yeah IM UNDEFINED`)
} else {
    console.log(`Yeah IM DEFINED`)
}

// Greater OR LESS THAN

if(100 < 99){
   console.log("Correct");
} else {
    console.log("Incorrect")
}
if(100 >= 99){
   console.log("Correct");
} else {
    console.log("Incorrect")
}

// if else

const color = "brown";

if(color === "red"){
    console.log("color is red");
} else if(color === "blue") {
    console.log("color is blue");
} else if(color === "brown") {
    console.log("color is brown");
}else {
    console.log("color not matched");
}

// LOGICAL STATEMENT

const name = "Javid";
const age = 67;

// AND - && check both value are true

if(age > 0 && age < 12){
    console.log(`${name} is a child`)
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is an adult`);
}

// OR - || check only one true or false

if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} can registered for the race`);
}

// TERNARY OPERTOR
console.log(100 === 101 ? "Correct" : "Incorrect");