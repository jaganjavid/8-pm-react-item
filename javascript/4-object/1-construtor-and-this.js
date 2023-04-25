// function statement(){
//     console.log(this);
// }

// statement();

// var obj = {
//     firstName:"Jagan",
//     lastName:"Javid",
//     getName: function(){
//        console.log(this.firstName + " " + this.lastName);
//     }
// }

// obj.getName();

// Person constructor

function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName,
    this.getFullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

const person = new Person("Jagan", "Javid");
const person2 = new Person("Arun", "Kumar");

console.log(person);
console.log(person2);


// function Test(){}

// const test = new Test();

// test.getThis = function(){
//     console.log(this);
// }

// test.getThis();


// const x = {
//     a: "Hello",
//     b: function(){
//         console.log(this);
//     }
// }

x.b();


