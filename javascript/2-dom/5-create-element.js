// Create Element

const li = document.createElement("li");

// Add Class
li.className = "collection-item";

// Add ID
li.id = "test";

// Create a text node and append

li.appendChild(document.createTextNode("Hello world"));

// Create new link element
const link = document.createElement("a");

// Add class to link
link.className = "delete-item secondary-content";

// Add Icon HTML
link.innerHTML = `<i class="fa fa-remove"></i>`;

li.appendChild(link);

document.querySelector(".collection").appendChild(li);
