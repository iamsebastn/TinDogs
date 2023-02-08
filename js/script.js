import {dogs} from "./data.js"

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

document.addEventListener("click", (e) => {
    if(e.target.id === "like-btn") {
        const likeStamp = document.getElementById("like-stamp")
        likeStamp.classList.toggle("opacity-low")
        setTimeout(()=> {
            likeStamp.classList.toggle("opacity-low")
        }, 1500)
    } else if (e.target.id === "nope-btn") {
        const nopeStamp = document.getElementById("nope-stamp")
        nopeStamp.classList.toggle("opacity-low")
        setTimeout(()=> {
            nopeStamp.classList.toggle("opacity-low")
        }, 1500)
    }
})

const dogObj = new Dog(dogs)
function render() {
    document.getElementById("profile-thumb").innerHTML = dogObj.renderProfile(dogs[0])
}

render()

