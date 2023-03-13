// document.getElementById();

// console.log(document.getElementById("task-title"));
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);


const tastTitle = document.getElementById("task-title");

// Change Style

tastTitle.style.background = "blue";
tastTitle.style.color = "#ffffff";
tastTitle.style.padding = "10px";
// tastTitle.style.display = "none";

// Change Content
tastTitle.textContent = "Task List";
tastTitle.innerText = "Task List 2";
tastTitle.innerHTML = '<span>Hello World</span>';


// document.querySelector(); //***

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-action"));
console.log(document.querySelector("h5"));


// document.querySelector("li").style.background = "brown";
// document.querySelector("ul li").style.background = "blue";
// document.querySelector("li:nth-child(3)").style.background = "blue";
document.querySelector("li:first-child").style.background = "green";
document.querySelector("li:last-child").style.background = "red";