
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    renderProfile(data) {
        const {name, avatar, age, bio} = data
        return `
            <img class="profile_img" src="${avatar}">
            <div class="profile_desc">
                <p class="p_head">${name}, ${age}</p>
                <p class="p_body">${bio}</p>
            </div>
        `
    }
    showLike() {
    }
    showNope() {
    }
}