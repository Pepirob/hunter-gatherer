class Enemies {
    constructor (posX, posY, speed, bgSpeed) {
        this.x = posX;
        this.y = posY;
        this.w = 60;
        this.h = 60;
        this.enemySpeed = speed;
        this.enemyBgSpeed = bgSpeed;
    }

    //METHODS

    drawEnemy = () => {
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    // Moving 
    // enemy towards player
    moveEnemyToCenter = () => {
        if(this.x < 275) {
            this.x += this.enemySpeed;
        } 
        if(this.x > 275) {
            this.x -= this.enemySpeed;
        } 
        if(this.y < 225) {
            this.y += this.enemySpeed;
        }
        if(this.y > 225) {
            this.y -= this.enemySpeed;
        }
    }

    // enemy's movement related to the background;
    moveEnemyUp = () => {
        this.y += (this.enemyBgSpeed);
    }
    moveEnemyDown = () => {
        this.y -= (this.enemyBgSpeed);
    }
    moveEnemyLeft = () => {
        this.x += (this.enemyBgSpeed);
    }
    moveEnemyRight = () => {
        this.x -= (this.enemyBgSpeed);
    }

}
    
    
    