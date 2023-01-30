class Spear {
    constructor (mouseX, mouseY) {
        this.x = 255;
        this.y = 235;
        this.w = 80;
        this.h = 8;
        this.speed = 8;
        this.spearbgSpeed = 10;
        //mouse possition
        this.mouseX = mouseX;
        this.mouseY = mouseY;
    }

    // METHODS

    drawSpear = () => {
        ctx.fillStyle = 'brown';
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
    //spear throwing movement
    throwSpear = () => {
        if(this.x <= this.mouseX) {
            this.x += this.speed;
        } 
        if(this.x >= this.mouseX) {
            this.x -= this.speed;
        } 
        if(this.y <= this.mouseY) {
            this.y += this.speed;
        }
        if(this.y >= this.mouseY) {
            this.y -= this.speed;
        }
    }
    // spear's movement related to 
    moveSpearUp = () => {
        if (this.x === this.mouseX && this.y === this.mouseY){
            this.y += (this.spearbgSpeed);
        }
    }
    moveSpearDown = () => {
        if (this.x === this.mouseX && this.y === this.mouseY){
            this.y -= (this.spearbgSpeed);
        }
    }
    moveSpearLeft = () => {
        if (this.x === this.mouseX && this.y === this.mouseY){
            this.x += (this.spearbgSpeed);
        }
    }
    moveSpearRight = () => {
        if (this.x === this.mouseX && this.y === this.mouseY){
            this.x -= (this.spearbgSpeed);
        }
    }
}