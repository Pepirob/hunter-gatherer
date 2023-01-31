class Background {
    constructor() {
        this.bg = new Image()
        this.bg.src = './images/image.webp'
        this.x = -1600;
        this.y = -1600;
        this.w = 3200;
        this.h = 3000;
        this.bgSpeed = 10;
    }

    //METHODS
    //Drawing
    drawBg = () => {
        ctx.drawImage(this.bg, this.x, this.y, canvas.width + this.w, canvas.height + this.h);
    }
    
    //moving
    moveBgUp = () => {
        this.y += this.bgSpeed;
    }
    moveBgDown = () => {
        this.y -= this.bgSpeed;
    }
    moveBgLeft = () => {
        this.x += this.bgSpeed;
    }
    moveBgRight = () => {
        this.x -= this.bgSpeed;
    }

}