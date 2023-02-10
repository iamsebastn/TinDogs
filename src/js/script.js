import { dogs } from "./data.js"
import Dog from "./Dog.js"

const likedArray = []
let currentIndex = 0
let dogObj = new Dog(dogs[currentIndex])
console.log(dogObj)

function render() {
    document.getElementById("profile-thumb").innerHTML = dogObj.getDogHtml()
}

render()
