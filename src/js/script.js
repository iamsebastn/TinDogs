import { gsap } from "gsap"
import { dogs } from "./data.js"
import Dog from "./Dog.js"

let currentIndex = 0
let dogObj = new Dog(dogs[currentIndex])
document.getElementById("like-btn").addEventListener("click", liked)
document.getElementById("nope-btn").addEventListener("click", noped)
document.getElementById("nav-btn").addEventListener("click", restart)

render()
    
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

    gsap.to(".profile-card", {
        x: "150vw",
        rotation: -25,
        duration: 1,
        ease: "power4.out"
    })

    setTimeout(() => {
        likeStamp.classList.toggle("opacity-low")
        getNextDog()
        render()
    }, 1500)
}

function noped() {
    let nopeStamp = document.getElementById("nope-stamp")
    nopeStamp.classList.toggle("opacity-low")

    gsap.to(".profile-card", {
        x: "-150vw",
        rotation: 25,
        duration: 1,
        ease: "power4.out"
    })

    setTimeout(() => {
        nopeStamp.classList.toggle("opacity-low")
        getNextDog()
        render()
    }, 1500)
}

function restart() {
    currentIndex = 0
    render()
}

// `
//         <div class="liked-obj">
//             <img class="profile_img_s" src="${dog.avatar}">
//             <div>
//                 <p class="p_head black">${dog.name}, ${dog.age}</p>
//                 <p class="p_body">${dog.bio}</p>
//             </div>
//         </div>       
//         `

let tl = gsap.timeline