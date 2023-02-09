import { gsap } from "gsap";

gsap.to(".p_head", {
    color: "#000" 
})

let likeLine = gsap.timeline

likeLine.to(state, {
    duration: 1,
    ease: "power1.inOut",
    stagger: 0.1,
    onComplete: () => console.log("done")
});