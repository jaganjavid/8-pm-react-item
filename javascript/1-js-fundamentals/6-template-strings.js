const name = "Jagan";
const age = 25;
const job = "Web Dev";
const city = "chennai";

let html;

// Without template strings
// html = "My name is" + name + " " + "im" + " " + age + " " + "My job is" + " " + job + " " + city;

// With template strings (es6)

html = `My name is ${name} im ${age} my job is ${job} and im from ${city}`;

console.log(html);