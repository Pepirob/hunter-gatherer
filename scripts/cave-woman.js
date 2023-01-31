console.log()
class CaveWoman {
    constructor() {
        this.x = 375;
        this.y = 275;
        this.w = 50;
        this.h = 50;
        this.health = 5;
    }

    //METHODS
    drawCaveWoman = () => {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x,this.y,this.w,this.h)
    }
}
