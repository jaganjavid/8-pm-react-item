class Github {
    constructor(){
        this.client_id = "8e81fbf4434304db7759";
        this.client_secret = "dc1dbdb9ee84acc92fce807629b509745f7aa0cf";
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}
        ?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return profile;
        
    }
}