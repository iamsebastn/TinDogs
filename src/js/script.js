import { dogs } from "./data.js"
import Dog from "./Dog.js"

let currentIndex = 0
let dogObj = new Dog(dogs[currentIndex])

render()

document.getElementById("like-btn").addEventListener("click", () => {
    liked()
    if(currentIndex === dogs.length) {
        likedMatches()
    }
})
    
function render() {
    document.getElementById("profile-thumb").innerHTML = dogObj.getDogHtml()
}

function getNextDog() {
    currentIndex++
    dogObj = new Dog(dogs[currentIndex])
    render()
}

function liked() {
    let likeStamp = document.getElementById("like-stamp")
    dogObj.hasBeenLiked = true
    likeStamp.classList.toggle("opacity-low")
    setTimeout(() => {
        likeStamp.classList.toggle("opacity-low")
        getNextDog()
        render()
    }, 1500)
}

function noped() {

}



