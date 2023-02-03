class Spear {
    constructor (mouseX, mouseY, playerPosX, playerPosY) {
        this.x = playerPosX;
        this.y = playerPosY;
        this.w = 80;
        this.h = 20;
        this.speed = 10;
        this.spearbgSpeed = 15;
        //mouse possition
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        this.image = new Image();
        if(mouseX < playerPosX && mouseY > playerPosY - playerPosY / 2 && mouseY < playerPosY + playerPosY / 2){
            this.image.src = "./images/SpearLeftt.png"
        }else if(mouseX > playerPosX && mouseY > playerPosY - playerPosY / 2 && mouseY < playerPosY + playerPosY / 2) {
            this.image.src = "./images/SpearRight.png"
        }else if(mouseY < playerPosY){
            this.image.src = "./images/SpearUp.png"
            this.w = 20;
            this.h = 80;
        }else {
            this.image.src = "./images/SpearDown.png"
            this.w = 20;
            this.h = 80;
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
}