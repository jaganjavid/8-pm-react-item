// String

const name1 = "Jagan";
const name2 = new String("Jagan");

console.log(name1);
console.log(name2);

if(name1 === name2){
    console.log("Yes im correct")
} else {
    console.log("Im not correct")
}

// Number

const num1 = 5;
const num2 = new Number(5);

// Boolean

const bool1 = true;
const bool2 = new Boolean(true);

// Function

const getSum1 = function(x, y){
    return x + y;
}

const getSum2 = new Function("x", "y", 'return x + y');

console.log(getSum1(5,5));
console.log(getSum2(5,5));

// Object

const obj1 = {name:"jagan"}
const obj2 = new Object({name:"jagan"})

// Array

const arr1 = [1,2,3];
const arr2 = new Array(1,2,3);

console.log(arr1);
console.log(arr2);

