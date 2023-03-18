const taskInput = document.getElementById("task");

// Key Down
// taskInput.addEventListener("keydown", runEvent);

// Keyup
// taskInput.addEventListener("keyup", runEvent);

// Keypress
// taskInput.addEventListener("keypress", runEvent)

// Focus
// taskInput.addEventListener("focus", runEvent);

// Blur
// taskInput.addEventListener("blur", runEvent);

// cut
// taskInput.addEventListener("cut", runEvent);

// copy
// taskInput.addEventListener("copy", runEvent);

// paste
// taskInput.addEventListener("paste", runEvent);





function runEvent(e){
    console.log(`Event Type: ${e.type}`);
    console.log(e.target.value);
}