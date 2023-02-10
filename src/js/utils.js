import { gsap } from "gsap";
export { renderSummary }

function renderSummary() {
    const likedSummary = likesArray.map((like) => {
        return `
        <div class="liked-obj">
            <img class="profile_img_s" src="images/dog-rex.jpg">
            <div>
                <p class="p_head black">${like.name}, ${like.age}</p>
                <p class="p_body">${like.bio}</p>
            </div>
        </div> 
        `
    })
    console.log("Click")
}
