// The idea is that if we have a lot of elements handled in a similar way,
// then instead of assigning a handler to each of them – 
// we put a single handler on their common ancestor.

// In the handler we get event.target to see where the event actually 
// happened and handle it.

const delItem = document.querySelector(".collection");

delItem.addEventListener("click", deleteItem);


function deleteItem(event){
// console.log(event.target.parentElement);
// if(event.target.parentElement.className === "delete-item secondary-content"){
//    event.target.parentElement.parentElement.remove();
// }
if(event.target.parentElement.classList.contains("delete-item")){
    event.target.parentElement.parentElement.remove();
}
}
