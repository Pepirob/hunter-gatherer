class Enemies {
    constructor (posX, posY, speed, bgSpeed, playerPosX, playerPosY) {
        this.x = posX;
        this.y = posY;
        this.w = 60;
        this.h = 60;
        this.enemySpeed = speed;
        this.enemyBgSpeed = bgSpeed;
        this.playerPosX = playerPosX;
        this.playerPosY = playerPosY;
    }

    //METHODS

    drawEnemy = () => {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    // Moving 
    // enemy towards player
    moveEnemyToCenter = () => {
        if(this.x < this.playerPosX) {
            this.x += this.enemySpeed;
        } 
        if(this.x > this.playerPosX) {
            this.x -= this.enemySpeed;
        } 
        if(this.y < this.playerPosY5) {
            this.y += this.enemySpeed;
        }
        if(this.y > this.playerPosY) {
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
    
    
    