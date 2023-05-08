const github = new Github();

// INIT UI

const ui = new UI;


const searchForm = document.getElementById("serachInput");



searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let serachUser = document.getElementById("serachUser").value;
    
    if(serachUser !== ""){
        github.getUser(serachUser)
        .then(data => {
            if(data.message === "Not Found"){
                alert("User Not Found");
            } else {
                ui.showProfile(data);
                document.getElementById("serachUser").value = "";
            }
        })
    }
   
    
})

