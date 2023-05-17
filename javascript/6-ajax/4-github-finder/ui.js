class UI{
    constructor(){
        this.profile = document.getElementById("profile");
    }

    // DISPLAY PROFILE IN UI

    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img width="100%" class="mb-3" src= ${user.avatar_url} alt="">
                    <a href= ${user.html_url} target="_blank" class="btn btn-primary btn-block">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge bg-primary">Public Repos : ${user.public_repos}</span>
                    <span class="badge bg-secondary">Followers : ${user.followers}</span>
                    <span class="badge bg-info">Following : ${user.following}</span>
                    <br>
                    <br>
        
                    <ul class="list-group"> 
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Email: ${user.email}</li>
                        <li class="list-group-item">location: ${user.location}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
    }
}