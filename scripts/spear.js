class Spear {
    constructor (mouseX, mouseY, playerPosX, playerPosY) {
        this.x = playerPosX;
        this.y = playerPosY;
        this.w = 60;
        this.h = 20;
        this.speed = 8;
        this.spearbgSpeed = 15;
        //mouse possition
        this.isSpearOn = true;
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        this.image = new Image();
        if(this.mouseX < 300) {
            this.image.src = './images/Spear - copia.png'
        } else if (this.mouseX > 300){
            this.image.src = './images/Spear - copia (2).png'
        } 
          else if (this.mouseY > 250){
            this.image.src = '../images/Spear - copia (3).png'
        } 
        else if (this.mouseY < 250){
            this.image.src = '../images/Spear - copia (4).png'
        }
            
    }

    // METHODS

    drawSpear = () => {
        
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
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