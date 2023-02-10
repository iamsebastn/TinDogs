import { dogs } from "./data.js"
import Dog from "./Dog.js"

const likedArray = []

document.addEventListener("click", (e) => {
    if(e.target.id = "like-btn") {
        likedArray.push()
        dogs.shift()
    } else if (e.target.id = "nope-btn") {
        dogs.shift()
    }
    render()
})

function getNewDog() {
    const nextDogData = dogs[0]
    return nextDogData ? new Dog(nextDogData) : {}
}

function render() {
    let dogObj = new Dog(dogs[0])
    document.getElementById("profile-thumb").innerHTML = dogObj.getDogHtml()
}

render()
