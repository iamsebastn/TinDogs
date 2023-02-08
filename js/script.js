const dogs = [
    {
        name: "Rex",
        avatar: "images/dog-rex.jpg",
        age: 25,
        bio: "Art. Literature. Natural wine. Yoga.",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },{
        name: "Bella",
        avatar: "images/dog-bella.jpg",
        age: 43,
        bio: "Yup, that's my owner. U can meet him if you want",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    {
        name: "Teddy",
        avatar: "images/dog-teddy.jpg",
        age: 30,
        bio: "How you doin?",
        hasBeenSwiped: false,
        hasBeenLiked: false
    }
]
console.log(dogs.name)

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

const dog = new Dog(dogs)

function render() {
    document.getElementById("profile-thumb").innerHTML = dog.renderProfile(dogs[0])
}

document.addEventListener("click", (e) => {
    if(e.target.id === "like-btn") {
        console.log("The dog has been liked")
    } else if (e.target.id === "nope-btn") {
        console.log("the dog has been noped")
    } else {
        console.log("I clicked somewhere")
    }
})

render()


