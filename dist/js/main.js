//Hide loader
document.querySelector(".loader").style.display = "none";

//Event listener
document.querySelector("#search-form").addEventListener("submit", (e)=>{
    //Init the github class
    const github = new Github();
    //Init UI
    const ui = new UI();

    const searchInput = document.querySelector(".search-input").value;
    if(searchInput!==""){
        github.getUser(searchInput)
            .then(data=>{
                if(data.profile.message==="Not Found"){
                    //ShowError Message
                    ui.showMessage("User not Found!", `alert-danger`)
                    ui.clearProfile();
                    setTimeout(()=>{
                        document.querySelector(".alert").remove();
                    }, 3000)
                }else{
                    //ShowProfile
                    document.querySelector(".loader").style.display = "block";

                    setTimeout(()=>{
                        //Display Profile
                        ui.showProfile(data.profile);
                        ui.showRepos(data.repos)
                        document.querySelector(".loader").style.display = "none";
                    }, 3000);   
                }
            })

    }else{
        //ShowError Message
        ui.showMessage("Enter Github Username!", `alert-warning`)
        setTimeout(()=>{
            document.querySelector(".alert").remove();
        }, 3000)
        ui.clearProfile();

    }
    e.preventDefault();

})