import {dogs} from "./data.js"
import {Dog} from "./dog.js"
import { renderSummary } from "./utils.js"

const likesArray = []



const dogObj = new Dog(dogs)
function render() {
    document.getElementById("profile-thumb").innerHTML = dogObj.renderProfile(dogs[0])
}

render()

document.addEventListener("click", () => {
    renderSummary()
})
