class Spear {
    constructor (mouseX, mouseY) {
        this.x = 255;
        this.y = 235;
        this.w = 60;
        this.h = 8;
        this.speed = 8;
        this.spearbgSpeed = 15;
        //mouse possition
        this.isSpearOn = true;
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
    // spear related to bg
    moveSpearUp = () => {
        this.y += (this.spearbgSpeed);
    }
    moveSpearDown = () => {
        this.y -= (this.spearbgSpeed);
    }
    moveSpearLeft = () => {
        this.x += (this.spearbgSpeed);
    }
    moveSpearRight = () => {
        this.x -= (this.spearbgSpeed);
    }
}