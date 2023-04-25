// DEFINE UI VARS

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");


// LOAD ALL EVENT LISTENERS

loadEventListerners();

function loadEventListerners(){

    // DOM Load Event 4
    document.addEventListener("DOMContentLoaded", getTasks)
    
    // ADD TASK EVENT 1
    form.addEventListener("submit", addTask);

    // Remove Task Event 2
    taskList.addEventListener("click", removeTask);

    // Clear All Task 3
    clearBtn.addEventListener("click", clearTask);
}


// GET Tasks

function getTasks(){
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(element){
        //   Create a LI ELEMENT
    const li = document.createElement("li");

    // Add Class
    li.className = "collection-item";

    // Create a text node
    li.appendChild(document.createTextNode(element));

    // Create a new link element
    const link = document.createElement("a");

    // Add Class
    link.className = "delete-item secondary-content";
    
    // Add Icon HTML
    link.innerHTML = `<i class="fa fa-remove"></i>`;

    li.appendChild(link);

    taskList.appendChild(li);
    });
}


// Add To Task

function addTask(e){
   e.preventDefault();
   
   //Validation
   if(taskInput.value === ""){
    alert("Please fill the form");
   } else {
    //   Create a LI ELEMENT
    const li = document.createElement("li");

    // Add Class
    li.className = "collection-item";

    // Create a text node
    li.appendChild(document.createTextNode(taskInput.value));

    // Create a new link element
    const link = document.createElement("a");

    // Add Class
    link.className = "delete-item secondary-content";
    
    // Add Icon HTML
    link.innerHTML = `<i class="fa fa-remove"></i>`;

    li.appendChild(link);

    taskList.appendChild(li);

    // stote in LS
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = "";
       
   }
  
}

function storeTaskInLocalStorage(task){
    let tasks;
    
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    
}

// Remove Task Event
function removeTask(e){
    if(e.target.parentElement.className === "delete-item secondary-content"){
        e.target.parentElement.parentElement.remove();
        removeTaskFromLs(e.target.parentElement.parentElement);
    }
}

function removeTaskFromLs(tastItem){
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    // tasks.forEach(function(task, index){
    //     if(tastItem.textContent === task){
    //         tasks.splice(index, 1);
    //     }
    // })

    tasks.filter(function(task, index){
        if(tastItem.textContent === task){
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem("tasks", JSON.stringify(tasks));
    
}

// Clear Task 
function clearTask(){
   taskList.innerHTML = "";

   //clear from LS
   clearTaskFromLS();
}

function clearTaskFromLS(){
    // localStorage.clear();
    localStorage.removeItem("tasks");
 }

// var arr = [1,2,3,4,5];
// var convertTosring = JSON.stringify(arr);
// var stringtoArr = JSON.parse(convertTosring);
// console.log(convertTosring);
// console.log(stringtoArr);


// var arr = [1,2,3,4,5];

// arr.splice(1,1);

// console.log(arr);