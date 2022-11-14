
export class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setSwipe (liked) {
        console.log(this)
        this.hasBeenSwiped = true
        this.hasBeenLiked = liked
        console.log(this)
    } 

    getDogHtml() {
        return `
        <img src="./${this.avatar}" class="display-picture">
        <div class="text">
            <h2 class="name-and-age">${this.name}, ${this.age}</h2>
            <p class="description">${this.bio}</p>
        </div>
        <img src="./images/badge-like.png" class="badge" id="like-badge">
        <img src="./images/badge-nope.png" class="badge" id="dislike-badge">
        `
    }
}