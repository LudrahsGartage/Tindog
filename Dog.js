// Create the Dog class here

export class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setSwipe (liked) {
        !this.hasBeenSwiped
        liked && !this.hasBeenLiked
    } 

    getDogHtml() {
        return `
        <img src="./${this.avatar}" class="display-picture">
        <div class="text">
            <h2 class="name-and-age">${this.name}, ${this.age}</h2>
            <p class="description">${this.bio}</p>
        </div>
        `
    }
}