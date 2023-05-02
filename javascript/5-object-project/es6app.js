class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}



class UI{
    addBooktoList(book){
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

    showAlert(message, className){
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

    deleteBook(target){
        target.parentElement.parentElement.remove();
    }

    clearFileds(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
}


class Store{
    static getBooks(){
        let books;

        if(localStorage.getItem("books") === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;
    }
    

    static displayBook(){
        const books = Store.getBooks();

        const ui = new UI();

        books.forEach(element => {
            ui.addBooktoList(element);
        });
    }

    static addBook(book){
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem("books", JSON.stringify(books));
    }

    static removeBook(isbn){
      const books = Store.getBooks();

      books.forEach(function(book, index){
        if(book.isbn === isbn){
            books.splice(index, 1);
        }
      })

      localStorage.setItem("books", JSON.stringify(books));
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
        Store.addBook(book);
        ui.showAlert("Book Added Succesfully", "alert-success");
        ui.clearFileds();
    }
})


document.getElementById("book-list").addEventListener("click", function(e){
    e.preventDefault();
    const ui = new UI();
    
    if(e.target.className === "btn btn-danger delete"){
        ui.deleteBook(e.target)
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    }
   
})

document.addEventListener("DOMContentLoaded", () => {
    Store.displayBook();
})