console.log()
class CaveWoman {
    constructor() {
        // Position
        this.x = 375;
        this.y = 275;
        this.w = 70;
        this.h = 80;
        this.health = 5;
        
        // Images
        // DOWN
        this.steadyDownImage = new Image();
        this.steadyDownImage.src = './images/player-down/steady-down.png'
        this.movesDownImage1 = new Image();
        this.movesDownImage1.src = './images/player-down/down1.png'
        this.movesDownImage2 = new Image();
        this.movesDownImage2.src = './images/player-down/down2.png'

        // UP
        this.movesUpImage1 = new Image();
        this.movesUpImage1.src = './images/player-up/moves-up1.png'
        this.movesUpImage2 = new Image();
        this.movesUpImage2.src = './images/player-up/moves-up2.png'
    
        // RIGHT
        this.movesRightImage1 = new Image();
        this.movesRightImage1.src = './images/player-right/left1.png'
        this.movesRightImage2 = new Image();
        this.movesRightImage2.src = './images/player-right/left2.png'

        // LEFT
        this.movesLeftImage1 = new Image();
        this.movesLeftImage1.src = './images/player-left/left1.png'
        this.movesLeftImage2 = new Image();
        this.movesLeftImage2.src = './images/player-left/left2.png'
    }

    // METHODS
    // Player animation
    drawCaveWoman = (controller, frames) => {
        if(controller.KeyA.pressed === false && controller.KeyD.pressed === false && controller.KeyS.pressed === false && controller.KeyW.pressed === false){
            ctx.drawImage(this.steadyDownImage, this.x, this.y, this.w, this.h)

        } else if (controller['KeyA'].pressed === true) {
            if (frames % 30 < 15) {
                ctx.drawImage(this.movesLeftImage1, this.x, this.y, this.w, this.h)
            }
            else {
                ctx.drawImage(this.movesLeftImage2, this.x, this.y, this.w, this.h)
            }
        } else if (controller['KeyW'].pressed === true) {
            if (frames % 30 < 15) {
                ctx.drawImage(this.movesUpImage1, this.x, this.y, this.w, this.h)
            }
            else {
                ctx.drawImage(this.movesUpImage2, this.x, this.y, this.w, this.h)
            }
        }else if (controller['KeyD'].pressed === true) {
            if (frames % 30 < 15) {
                ctx.drawImage(this.movesRightImage1, this.x, this.y, this.w, this.h)
            }
            else {
                ctx.drawImage(this.movesRightImage2, this.x, this.y, this.w, this.h)
            }
        }else if (controller['KeyS'].pressed === true) {
            if (frames % 30 < 15) {
                ctx.drawImage(this.movesDownImage1, this.x, this.y, this.w, this.h)
            }
            else {
                ctx.drawImage(this.movesDownImage2, this.x, this.y, this.w, this.h)
            }
        }
    }
}
