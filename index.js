// Remember to import the data and Dog class!

import { dogs } from "./data.js"
import { Dog } from "./Dog.js"

let currentDog

function getNewDog() {
    currentDog = new Dog(dogs.shift())
    return currentDog
}

function render() {
    document.getElementById("container").innerHTML = currentDog.getDogHtml()
}

getNewDog()
getNewDog()
render()