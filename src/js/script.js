import { gsap } from "gsap"
import { dogs } from "./data.js"
import Dog from "./Dog.js"

let likedDogs = []
let currentIndex = 0
let dogObj = new Dog(dogs[currentIndex])
document.getElementById("like-btn").addEventListener("click", liked)
document.getElementById("nope-btn").addEventListener("click", noped)
    
function render() {
    document.getElementById("profile-thumb").innerHTML = dogObj.getDogHtml()
}

function renderMatches() {
    if(currentIndex < dogs.length -1) {
        getNextDog()
        render()
    } else {
        const matchedDogs = likedDogs.map((dog) => {
            return `
                    <div class="liked-obj">
                        <img class="profile_img_s" src="${dog.avatar}">
                        <div>
                            <p class="p_head black">${dog.name}, ${dog.age}</p>
                            <p class="p_body">${dog.bio}</p>
                        </div>
                    </div>                
            `
        }).join("")
        document.getElementById("page-content").innerHTML = matchedDogs
    }
}

function getNextDog() {
    currentIndex++
    dogObj = new Dog(dogs[currentIndex])
    render()
}

function liked() {
    likedDogs.push(dogObj)

    gsap.to(".profile-card", {
        x: "150vw",
        rotation: -25,
        duration: 1,
        ease: "power4.out"
    })

    setTimeout(() => {
        renderMatches()
    }, 1500)
}

function noped() {
    dogObj.setMatchStatus(false)

    gsap.to(".profile-card", {
        x: "-150vw",
        rotation: 25,
        duration: 1,
        ease: "power4.out"
    })

    setTimeout(() => {
        renderMatches()
    }, 1500)
}



render()

// `
//         <div class="liked-obj">
//             <img class="profile_img_s" src="${dog.avatar}">
//             <div>
//                 <p class="p_head black">${dog.name}, ${dog.age}</p>
//                 <p class="p_body">${dog.bio}</p>
//             </div>
//         </div>       
//         `
