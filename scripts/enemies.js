class Enemies {
    constructor (posX, posY, speed, bgSpeed, playerPosX, playerPosY) {
        this.x = posX;
        this.y = posY;
        this.w = 100;
        this.h = 60;
        this.enemySpeed = speed;
        this.enemyBgSpeed = bgSpeed;
        this.playerPosX = playerPosX;
        this.playerPosY = playerPosY;
        this.image = new Image();
        this.image.src = './images/animal.png'
        this.invertedImage = new Image ();
        this.invertedImage.src = './images/animal-inverted.png'
    }

    //METHODS

    drawEnemy = () => {
        if(this.x > game.caveWoman.x){
            ctx.drawImage(this.invertedImage, this.x, this.y, this.w, this.h);
        }else {ctx.drawImage(this.image, this.x, this.y, this.w, this.h);}
        
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
        if(this.y < this.playerPosY) {
            this.y += this.enemySpeed;
        }
        if(this.y > this.playerPosY) {
            this.y -= this.enemySpeed;
        }
    }
}
    
    
    