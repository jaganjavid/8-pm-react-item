let val;

val = document;
val = document.all;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;

val = document.forms; // HTML COLLECTION
val = document.forms[0];
val = document.forms[0].id;

val = document.links[5].className; // string
val = document.links[5].classList[1]; // domtokenlist
val = document.links[5].getAttribute("href");

val = document.images;
val = document.images[0].src;

val = document.scripts;
// val = document.scripts[0].src;
// val = document.scripts[0].getAttribute("src");

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

console.log(scriptsArr);

// for(let i = 0; i<scripts.length; i++){
//     console.log(scripts[i]);
// }

scriptsArr.forEach(function(element, index){
    console.log(`${element.src} - ${index}`);
})



console.log(scripts);


// var arr = [1,2,3,4,5];

// arr.forEach(function(element, index){
//     console.log(`${element} - ${index}`);
// })

// for(let i = 0; i<5; i++){
//     console.log(arr[i]);
// }