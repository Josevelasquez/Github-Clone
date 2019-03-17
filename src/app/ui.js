class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(userData){
        console.log(userData);
        this.profile.innerHTML = `
            <div class ="card mt-2 animated bounceInLeft">
                <img src="${userData.avatar_url}" class="card-img-top"/>
                <div class="card-body">
                    <h3 class="">${user.name}</h3>
                </div>
            </div>
        `;
    }
}

module.exports = UI;