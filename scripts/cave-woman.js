class CaveWoman {
    constructor() {
        this.x = 275;
        this.y = 225;
        this.w = 50;
        this.h = 50;
    }

    //METHODS
    drawCaveWoman = () => {
        ctx.fillRect(this.x,this.y,this.w,this.h)
    }
}