class UI{
    constructor(){
        this.profile = document.getElementById("profile");
        //this.repo = document.getElementById("repo");
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body my-3">
            <div class = "row">
                <div class= "col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <div class= "text-muted fs-5 fw-bold text-center my-2 "> ${user.name}</div>
                    <a href="${user.html_url}" target="_blank" class= "btn btn-info w-100 text-light"> View Profile</a>
                </div>
                <div class="col-md-9">
                    <div class = "my-3">
                        <span class="badge bg-primary mb-2"> Public Repos: ${user.public_repos} </span>
                        <span class="badge bg-secondary mb-2"> Public Gist: ${user.public_repos} </span>
                        <span class="badge bg-warning mb-2"> Followers: ${user.follower} </span>
                        <span class="badge bg-success mb-2"> Following: ${user.following} </span>
                    </div> 
                    
                    <ul class="list-group ">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/ Blog: ${user.website}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class ="page-heading py-3">Latest Repos</h3>
        <div id="repos"></div>
        ` 
    }

    showMessage(msg, classname){
        //Clear Current Alert
        this.clearAlert();
        //Create div
        const div = document.createElement("div");
        //Assign class to div
        div.className=`alert ${classname}`
        //Add nodeList to div
        div.appendChild(document.createTextNode(msg));
        //Get parent Element
        const searchForm = document.getElementById("search-form");
        const searchContent = document.querySelector(".search-content");

        searchForm.insertBefore(div,searchContent);
    }

    clearProfile(){
        this.profile.innerHTML="";
    }

    clearAlert(){
        const currentAlert = document.querySelector(".alert");
        if (currentAlert){
            currentAlert.remove()
        }
    }

    //Show Repos
    showRepos(repos){
        repos.forEach((repo)=>{
            document.getElementById("repos").innerHTML+= `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    
                    <div class="col-md-6">
                        <div>
                            <span class="badge bg-primary"> Stars: ${repo.public_repos} </span>
                            <span class="badge bg-secondary"> Watchers: ${repo.watchers_count} </span>
                            <span class="badge bg-warning"> Forks: ${repo.forks_count} </span>
                            <span class="badge bg-success"> Size: ${repo.size} </span>
                        </div>
                    </div>
                </div>
            <div>
            `
        })
    }

   

}