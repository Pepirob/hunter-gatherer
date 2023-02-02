class Background {
    constructor() {
        this.bg = new Image()
        this.bg.src = '../images/grassland.png'
        this.x = -950;
        this.y = -1050;
        this.w = 2700;
        this.h = 2700;
        this.bgSpeed = 6;
        this.bonFireImage = new Image()
        this.bonFireImage.src = './images/Bonfire_1.png';
        this.bonfireX = 350;
        this.bonfireY = 283;
        this.bonfireW = 100;
        this.bonfireH = 120;
    }

    //METHODS
    //Drawing
    drawBg = () => {
        ctx.drawImage(this.bg, this.x, this.y, this.w, this.h);
        ctx.drawImage(this.bonFireImage, this.bonfireX , this.bonfireY, this.bonfireW, this.bonfireH)
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
        })
        game.berriesArr.forEach((berry) => {
            berry.y += (this.bgSpeed);
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
        })
        game.berriesArr.forEach((berry) => {
            berry.y -= (this.bgSpeed);
            
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
        })
        game.berriesArr.forEach((berry) => {
            berry.x += (this.bgSpeed);
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
        })
        game.berriesArr.forEach((berry) => {
            berry.x -= (this.bgSpeed);
        })
    }
    
}
