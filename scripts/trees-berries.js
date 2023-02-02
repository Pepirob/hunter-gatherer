class Trees {
    constructor(posX, posY) {
        this.x = posX;
        this.y = posY;
        this.w = 70;
        this.h = 120;
        this.image = new Image ();
        this.image.src = './images/tree1.png'
        this.image2 = new Image ();
        this.image2.src = './images/tree2.png'
    }

    // METHODS 

    drawTree = (frames) => {
        if(frames % 30 < 15){
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
        }else {
            ctx.drawImage(this.image2, this.x, this.y, this.w, this.h)
        }
    }
    
}

class Berries {
    constructor (posX, posY) {
        this.x = posX + 20;
        this.y = posY + 35;
        this.w = 30;
        this.h = 30;
        this.berryImage = new Image ();
        this.berryImage.src = './images/cranberry.png'
    }

    drawBerry = () => {
        ctx.drawImage(this.berryImage, this.x, this.y, this.w, this.h)
    }

}