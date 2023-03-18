// document.querySelector(".clear-tasks").addEventListener("click", function(){
//     console.log('Hey');
// })


document.querySelector(".clear-tasks").addEventListener("click", onClick);


function onClick(event){
    let val;

    val = event;

    // Event Target Element
    val = event.target;
    val = event.target.id;
    val = event.target.className;
    console.log(val);
    val = event.target.classList.add("test-2");
    val = event.target.classList
    console.log(val);
}

