class Background {
    constructor() {
        this.bg = new Image()
        this.bg.src = './images/image.webp'
        this.x = -1200;
        this.y = -1200;
        this.w = 3000;
        this.h = 2900;
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
    // Moving diagonal
    // moveBgUpRight = () => {
    //     this.x -= this.bgSpeed;
    //     this.y += this.bgSpeed;
    // }
    // moveBgDownRight = () => {
    //     this.x -= this.bgSpeed;
    //     this.y -= this.bgSpeed;
    // }
    // moveBgUpLeft = () => {
    //     this.x += this.bgSpeed;
    //     this.y += this.bgSpeed
    // }
    // moveBgDownLeft = () => {
    //     this.x += this.bgSpeed;
    //     this.y -= this.bgSpeed;
    // }

}