class Background {
    constructor() {
        this.bg = new Image()
        this.bg.src = './images/grassland.png'
        this.x = -950;
        this.y = -1050;
        this.w = 2700;
        this.h = 2700;
        this.bgSpeed = 8;
        this.bonFireImage = new Image()
        this.bonFireImage.src = './images/fire_pit-removebg-preview.png';
        this.bonfireX = 375;
        this.bonfireY = 350;
        this.bonfireW = 50;
        this.bonfireH = 60;
        this.caveImage = new Image ();
        this.caveImage.src = './images/cave.png'
    }

    //METHODS
    //Drawing
    drawBg = () => {
        ctx.drawImage(this.bg, this.x, this.y, this.w, this.h);
        ctx.drawImage(this.bonFireImage, this.bonfireX , this.bonfireY, this.bonfireW, this.bonfireH)
        // ctx.drawImage(this.caveImage, this.bonfireX - 140, this.bonfireY - 140, this.bonfireW + 100, this.bonfireH + 100)
    }
    
    //moving
    moveBgUp = () => {
        this.y += this.bgSpeed;
        this.bonfireY += this.bgSpeed;
        game.enemiesArr.forEach((enemy) => {
            enemy.y += (enemy.enemyBgSpeed);
        })
        game.treesArr.forEach((tree) => {
            tree.y += (this.bgSpeed);
            tree.berryY += (this.bgSpeed);
        })
    }
    moveBgDown = () => {
        this.y -= this.bgSpeed;
        this.bonfireY -= this.bgSpeed;
        game.enemiesArr.forEach((enemy) => {
            enemy.y -= (enemy.enemyBgSpeed);
        });
        game.treesArr.forEach((tree) => {
            tree.y -= (this.bgSpeed);
            tree.berryY -= (this.bgSpeed);
        })
    }
    moveBgLeft = () => {
        this.x += this.bgSpeed;
        this.bonfireX += this.bgSpeed;
        game.enemiesArr.forEach((enemy) => {
            enemy.x += (enemy.enemyBgSpeed);
        });
        game.treesArr.forEach((tree) => {
            tree.x += (this.bgSpeed);
            tree.berryX += (this.bgSpeed);
        })
    }
    moveBgRight = () => {
        this.x -= this.bgSpeed;
        this.bonfireX -= this.bgSpeed;
        game.enemiesArr.forEach((enemy) => {
            enemy.x -= (enemy.enemyBgSpeed);
        });
        game.treesArr.forEach((tree) => {
            tree.x -= (this.bgSpeed);
            tree.berryX -= (this.bgSpeed);
        })
    }
    
}
