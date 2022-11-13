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

// Create conditional logic on render - 
// if is swiped is true, and if liked is true, display liked and have set time out lock
// if is liked is false, display disliked and set time out
// if swiped is false do nothing
//render

// add a single page event listener to handle button id clicks
// data is passed according to button id, and a handle click function is called, which handles clicks, logic and render method.

// if array is empty, display no more matches in main