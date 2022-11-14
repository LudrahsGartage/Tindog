import { dogs } from "./data.js"
import { Dog } from "./Dog.js"

let currentDog
let timeout = false

document.getElementById("btn-bar").addEventListener("click", (event) => handleClick(event))

function getNewDog() {
    currentDog = new Dog(dogs.shift())
    return currentDog
}

function render() {
    if (currentDog.name) {
        document.getElementById("container").innerHTML = currentDog.getDogHtml()
    } else {
        document.querySelector("main").innerHTML = `<div class="no-matches">No More Matches! T_T</div>`
    }
}

function handleClick (event) {
    if(timeout === false) {
        if (event.target.id == "cross-icon") {
            timeout = true
            currentDog.setSwipe(false)
            document.getElementById("dislike-badge").classList.add("unhide")
        } else if (event.target.id == "heart-icon") {
            timeout = true
            currentDog.setSwipe(true)
            document.getElementById("like-badge").classList.add("unhide")
        }
        if (currentDog.hasBeenSwiped) {
            setTimeout(()=>{
                getNewDog()
                render()
                timeout = false
            },1500)
        }
    }
}


getNewDog()
render()