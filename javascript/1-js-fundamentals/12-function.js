// Function Decalaration

// The function Decalaration (function statement) defines a 
// function with the specified paramenters

// Two Phases

// 1 - creatation
// 2 - excutation

// function greet(firstName = "John", lastName = "Doe"){
//    if(typeof firstName === "undefined"){
//     firstName = "John";
//    }
//    if(typeof lastName === "undefined"){
//     lastName = "Doe";
//    }

//    return "Hello" + " " + firstName + " " + lastName;
// }

// console.log(greet("Jagan", "Javid"));

// Function Expressions
// const add = function(x = 5){
//     return x + 5;
// }

// console.log(add())

// An IIFE (Imediately Invoked function Expression) in a javascript

// (function(){
//     console.log("IIFE RUN")
// })();

// (function(name){
//     console.log("Hello" + " " + name);
// })("Jagan");

// 5 + 5;
// (5);
// true;
// [];
// {};
// function(){//}

const person = {
    // Properties
    firstName: "Jagan", // key and value or name and value
    lastName: "Javid",
    // Methode
    getFullName: function(){
        return this.firstName + " " + this.lastName;
    },
    test: function(time){
        return time;
    }
}

console.log(person.firstName);

console.log(person.getFullName());
console.log(person.test("8:40"));



