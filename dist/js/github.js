
class Github{
    constructor(){
        this.client_Id= "0982a2ba0bebffdcddb6";
        this.client_Secret = "7f6259b15042ffb8a48c4409bd6e5d62cfb9e7dc";
        this.repos_count = 10;
        this.repos_sort= "created asc:"
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_Id}&?client_secret=${this.client_Secret}`);
        
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_Id}&?client_secret=${this.client_Secret}`);
       
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        
        return {
            profile,
            repos
        }
    }
}