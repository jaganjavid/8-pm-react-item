document.getElementById("button").addEventListener("click", loadData);


function loadData(){
    // Create an XHR OBJECT

    const xhr = new XMLHttpRequest();

    // OPEN

    xhr.open("GET", "customer.json", true);

    // Onlode
    xhr.onload = function(){
        if(this.status === 200){

         const customer = JSON.parse(this.response);   

         let output = `
         <ul>
            <li>ID : ${customer.id}</li>
            <li>Name : ${customer.name}</li>
            <li>Company : ${customer.company}</li>
            <li>Phone : ${customer.phone}</li>
         </ul>
         `

          document.getElementById("output").innerHTML = output;
        }
        if(this.status === 400){
            document.getElementById("output").innerHTML = `<h1>Not FOund</h1>`
        }
    }

    xhr.send();
}


// HTTP STATUS

// 200 -- Good or Ok 
// 403 -- Forbidden
// 404 --- Not Found
// 500 -- Server Problem