import { dogs } from "./data.js"
import { renderSummary } from "./utils.js"
import Dog from "./Dog.js"


let likesArray = []

function showSummary() {
    const likedDogs = likesArray.map((dog) => {
        return `
        <img class="profile_img" src="${avatar}">
        <div class="profile_desc">
            <p class="p_head">${name}, ${age}</p>
            <p class="p_body">${bio}</p>
        </div>
    `
    })
}

function render() {
    document.getElementById("profile-thumb").innerHTML = dogObj.renderProfile(dogs[0])
}
const dogObj = new Dog(dogs)
render()

document.addEventListener("click", () => {
    renderSummary()
})
