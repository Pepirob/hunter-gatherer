class Health {
    constructor () {
        this.x = 30;
        this.y = 30;
        this.w = 35;
        this.h = 35;
        this.heartImage = new Image();
        this.heartImage.src = './images/heart.png';
        this.voidHeartImage = new Image ();
        this.voidHeartImage.src = './images/void-heart.png';
        this.health = 5;
    }

    //METHODS
    drawHeart = (posX) => {
        ctx.drawImage(this.heartImage, posX, this.y, this.w, this.h);
    }
    drawVoidHeart = (posX) => {
        ctx.drawImage(this.voidHeartImage, posX, this.y, this.w, this.h)
    }
}