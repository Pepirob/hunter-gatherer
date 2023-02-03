class Enemies {
    constructor (posX, posY, speed, bgSpeed, playerPosX, playerPosY) {
        // Position
        this.x = posX;
        this.y = posY;
        this.w = 100;
        this.h = 60;
        this.enemySpeed = speed;
        this.enemyBgSpeed = bgSpeed;
        this.playerPosX = playerPosX;
        this.playerPosY = playerPosY;
        
        // Images
        this.lionImage = new Image();
        this.lionImage.src = './images/lion.png';
        this.invertedLionImage = new Image ();
        this.invertedLionImage.src = './images/lion2.png';
        this.wolfImage = new Image();
        this.wolfImage.src = './images/wolf.png'
        this.invertedWolfImage = new Image ();
        this.invertedWolfImage.src = './images/wolf2.png'

        //Randomiser
        this.randomNum = Math.floor(Math.random() * 2)

        // State cchecker
        this.isCollisionOn = true;
    }

    //METHODS
        drawEnemies = () => {
            
            if (this.randomNum === 1){
                if(this.x > game.caveWoman.x){
                    ctx.drawImage(this.lionImage, this.x, this.y, this.w, this.h);
                }else {ctx.drawImage(this.invertedLionImage, this.x, this.y, this.w, this.h);}
            } else{
                if(this.x > game.caveWoman.x){
                    ctx.drawImage(this.wolfImage, this.x, this.y, this.w, this.h);
                }else {ctx.drawImage(this.invertedWolfImage, this.x, this.y, this.w, this.h);}
            }
        }

    

    // Moving 
    // Enemy towards player
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
    
    
    