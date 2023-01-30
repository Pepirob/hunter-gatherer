class Game {

    constructor () {
        this.bg = new Background();
        this.caveWoman = new CaveWoman();
        this.enemy = new Enemies();
        this.spear = new Spear();
        this.enemiesArr = [];
        this.spearsArr = [];
        this.isGameOn = true;
        this.frames = 1;
    
    }


    //METHODS
    clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    spawningEnemies = () => {
        let randomFrame = Math.floor(Math.random() * 1200 + 1)

        if(this.enemiesArr === 0 || this.frames % randomFrame === 0) {
            let randomPosX = Math.random() * (3000 - (-1200)) + (-1200);
            let randomPosY = Math.random() * (2900 - (-1200)) + (-1200);
            let randomSpeed = Math.random() * (2 - 1) + 1;
            let randomBgSpeed = Math.random() * (10 - 5) + 5;

            let enemy = new Enemies (randomPosX, randomPosY, randomSpeed, randomBgSpeed);
            this.enemiesArr.push(enemy);
            console.log("hay un enemigo");
        }
    }

    drawAllEnemies = () => {
        this.enemiesArr.forEach((enemy) => {
            enemy.drawEnemy();
        });
    }

    allEnemiesMoves = () => {
       this.enemiesArr.forEach((enemy) => {
        enemy.moveEnemyToCenter();
       })
    }

    drawAllSpears = () => {
        this.spearsArr.forEach((spear) => {
            spear.drawSpear();
        });
    }

    throwAllSpears = () => {
        this.spearsArr.forEach((spear) => {
            spear.throwSpear();
        });
        
    }

    //colissions
    spearEnemyColission = () => {
        this.spearsArr.forEach((spear, spearIndex) => {
           this.enemiesArr.forEach((enemy, index) => {
            if( spear.x < enemy.x + enemy.w &&
                spear.x + spear.w > enemy.x &&
                spear.y < enemy.y + enemy.h &&
                spear.h + spear.y > enemy.y){
                this.enemiesArr.splice(index, 1)
                this.spearsArr.splice(spearIndex, 1)
                console.log("enemigo asesinado");
            } 
           })
        });
       }

    enemyPlayerColission = () => {
        this.enemiesArr.forEach((enemy) => {
            if (enemy.x < this.caveWoman.x + this.caveWoman.w &&
                enemy.x + enemy.w > this.caveWoman.x &&
                enemy.y < this.caveWoman.y + this.caveWoman.h &&
                enemy.h + enemy.y > this.caveWoman.y ) {
                    console.log("contact");
                }
        })
    }
            
    

    gameLoop = () => {

        this.frames++

        //1. clean canvas
        this.clearCanvas();

        //2. drawings
        this.bg.drawBg();
        this.caveWoman.drawCaveWoman();
        this.spawningEnemies();
        this.drawAllEnemies();
        this.drawAllSpears();

        //3. actions
       
        this.allEnemiesMoves();
        this.throwAllSpears();
        this.spearEnemyColission();
        this.enemyPlayerColission();
        

        //4. recursion control

        requestAnimationFrame(this.gameLoop);
          

    }
}
   

    


