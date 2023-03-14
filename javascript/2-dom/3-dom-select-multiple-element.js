// document.getElementsByClassName();

const items = document.getElementsByClassName("collection-item"); // HTMLCOLLECTION


items[3].style.color = "green";
items[3].textContent = "Vanakam";

// for(let i = 0; i<items.length; i++){
//     console.log(items[i].style.background = "blue");
// }

// convert HTMLCOLLECTION to array

let lists = Array.from(items);

lists.forEach(function(element, index){
    console.log(element.style.color = "red");
})

// document.querySelectorAll();

const items2 = document.querySelectorAll("li"); // NODELIST

items2.forEach(function(element, index){
    console.log(element.style.color = "brown");
})