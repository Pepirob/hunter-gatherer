class Trees {
    constructor(posX, posY) {
        // Tree position
        this.x = posX;
        this.y = posY;
        this.w = 70;
        this.h = 120;

        // Berry position
        this.berryX = posX + 20;
        this.berryY = posY + 35;
        this.berryW = 30;
        this.berryH = 30;

        // Images
        this.image = new Image ();
        this.image.src = './images/tree1.png'
        this.image2 = new Image ();
        this.image2.src = './images/tree2.png'
        this.isBerryOn = true;
        this.berryImage = new Image ();
        this.berryImage.src = './images/cranberry.png'
    }

    // METHODS 

    drawTree = (frames) => {
        if(frames % 30 < 15){
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
        }else {
            ctx.drawImage(this.image2, this.x, this.y, this.w, this.h)
        }
    }
    drawBerry = () => {
        if (this.isBerryOn === true)
        ctx.drawImage(this.berryImage, this.berryX, this.berryY, this.berryW, this.berryH)
    }
}