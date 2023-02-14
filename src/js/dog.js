class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getDogHtml() {
        const {name, avatar, age, bio} = this
        return `
            <div class="profile-card">
            <img class="img-huge nope" id="nope-stamp" src="../images/nope-image.png">
            <img class="img-huge like" id="like-stamp" src="../images/like-image.png">
                <img class="profile_img" src="${avatar}">
                <div class="profile_desc">
                    <p class="p_head">${name}, ${age}</p>
                    <p class="p_body">${bio}</p>
                </div>
            </div>
        `
    }
    setMatchStatus(bool) {
        this.hasBeenSwiped = true
        this.hasBeenLiked = bool
    }
}

export default Dog

