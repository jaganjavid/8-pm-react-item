// Book Constructor

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI(){

    // Add Book to list
    UI.prototype.addBooktoList = function(book){
        const list = document.querySelector("#book-list");

        // Create tr element

        const row = document.createElement("tr");

        // Insert cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>
                <button type="button"
                class="btn btn-danger delete">Delete</button>
            </td>
        `;

        list.appendChild(row);

    }

    // Show Alert

    UI.prototype.showAlert = function(message, className){
        // Create Div
        const div = document.createElement("div");

        // Add Class
        div.className = `alert ${className}`;

        // Add Text 
        div.appendChild(document.createTextNode(message));

        // Get show-alert
        const showAlert = document.querySelector(".show-alert");

        // InserAlert
        showAlert.appendChild(div);

        // SetTime out
        setTimeout(function(){
           document.querySelector(".alert").remove();
        },3000)
    }

    // Delete Fields
    UI.prototype.deleteBook = function(target){
        target.remove();
    }

    // Clear Fields
    UI.prototype.clearFileds = function(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    } 
}


// Event Listener for add book

document.getElementById("book-form")
.addEventListener("submit", function(e){
    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    const book = new Book(title, author, isbn);

    const ui = new UI();

    if(title === "" || author === "" || isbn === ""){
        ui.showAlert("please fill all the fileds", "alert-danger");
        return;
    } else{
        ui.addBooktoList(book);
        ui.showAlert("Book Added Succesfully", "alert-success");
        ui.clearFileds();
    }
})


document.getElementById("book-list").addEventListener("click", function(e){
    e.preventDefault();
    const ui = new UI();
    ui.deleteBook(e.target.parentElement.parentElement);
    ui.showAlert("Book Deleted Succesfully", "alert-success");
})

