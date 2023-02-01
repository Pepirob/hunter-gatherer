class Game {

    constructor () {
        this.bg = new Background();
        this.caveWoman = new CaveWoman();
        this.spear = new Spear();
        this.health = new Health ();
        this.enemiesArr = [];
        this.spearsArr = [];
        this.isGameOn = true;
        this.frames = 1;
        //movement property
        this.controller = {
            KeyW: {pressed: false, functionBg: this.bg.moveBgUp, functionEnemy: this.enemiesRelatedToBgUp},
            KeyS: {pressed: false, functionBg: this.bg.moveBgDown, functionEnemy: this.enemiesRelatedToBgDown},
            KeyA: {pressed: false, functionBg: this.bg.moveBgLeft, functionEnemy: this.enemiesRelatedToBgLeft},
            KeyD: {pressed: false, functionBg: this.bg.moveBgRight, functionEnemy: this.enemiesRelatedToBgRight}
        }
    }


    //METHODS
    clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    spawningEnemies = () => {
        let randomFrame = Math.floor(Math.random() * 1200 + 1)

        if(this.enemiesArr === 0 || this.frames % randomFrame === 0) {
            let randomPosX = Math.random() * (this.bg.w - (this.bg.x)) + (this.bg.x);
            let randomPosY = Math.random() * (this.bg.h - (this.bg.y)) + (this.bg.y);
            let randomSpeed = Math.random() * (5 - 1) + 1;
            let randomBgSpeed = Math.random() * (15 - 5) + 5;

            let enemy = new Enemies (randomPosX, randomPosY, randomSpeed, randomBgSpeed, this.caveWoman.x, this.caveWoman.y);
            this.enemiesArr.push(enemy);
            console.log("hay un enemigo");
        }
    }

    drawAllEnemies = () => {
        this.enemiesArr.forEach((enemy) => {
            enemy.drawEnemy();
        });
    }

   

    drawAllSpears = () => {
        this.spearsArr.forEach((spear) => {
            spear.drawSpear();
        });
    }

    drawHealth = () => {
        for (let i = 0; i < this.health.health; i++){
            let x = this.health.x + i * (this.health.w + (this.health.x / 2));
            

        if (this.caveWoman.health >= i + 1){
            this.health.drawHeart(x);
        } else {
            this.health.drawVoidHeart(x);
         }
        }
    }
    

    // Movement
    movement = () => {
        Object.keys(this.controller).forEach((key) => {
            // console.log("presionando")
            if(this.controller[key].pressed === true){
                // console.log("presionando")
                this.controller[key].functionBg();
                this.controller[key].functionEnemy();
            }
        })
    }
    
    enemiesRelatedToBgUp = () => {
        this.enemiesArr.forEach((enemy) => {
                //UP
        enemy.moveEnemyUp();
        })
    }
    
    enemiesRelatedToBgDown = () => {
        this.enemiesArr.forEach((enemy) => {
                //DOWN
        enemy.moveEnemyDown();
        })
    }
        
    enemiesRelatedToBgLeft = () => {
        this.enemiesArr.forEach((enemy) => {
                //LEFT
            enemy.moveEnemyLeft();
        })
    }
        
    enemiesRelatedToBgRight = () => {
        this.enemiesArr.forEach((enemy) => {
                //RIGHT
        enemy.moveEnemyRight();
        })
    }

    allEnemiesMoves = () => {
        this.enemiesArr.forEach((enemy) => {
         enemy.moveEnemyToCenter();
        })
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
                // console.log("enemigo asesinado");
            } 
           })
        });
       }

    enemyPlayerColission = () => {
        this.enemiesArr.forEach((enemy) => {
            if (enemy.x < this.caveWoman.x + this.caveWoman.w &&
                enemy.x + enemy.w > this.caveWoman.x &&
                enemy.y < this.caveWoman.y + this.caveWoman.h &&
                enemy.h + enemy.y > this.caveWoman.y && this.frames % 30 === 0) {
                    this.caveWoman.health--;
                    console.log(this.caveWoman.health)
                }
                    
            if (this.caveWoman.health === 0){
                this.gameOver()
            }
        })
    }

    bgPlayerColission = () => {
        if(this.bg.x > this.caveWoman.x ){
            
            this.bg.moveBgRight()
        }
        if(this.bg.x + (this.bg.w + canvas.width) < this.caveWoman.x + this.caveWoman.w){
            
            this.bg.moveBgLeft()
        }
        if(this.bg.y > this.caveWoman.y){
            this.bg.moveBgDown()
            console.log("colision")
        }
        if (this.bg.y + (this.bg.h + canvas.height) < this.caveWoman.y + this.caveWoman.h) {
            this.bg.moveBgUp()
        }
    }

    gameOver = () => {
        this.isGameOn = false;
        canvas.style.display = "none";
        gameoverScreen.style.display = "flex";
        lives.style.display = 'none';
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
        this.drawHealth();

        //3. actions
        this.movement();
        this.allEnemiesMoves();
        this.throwAllSpears();
        this.spearEnemyColission();
        this.enemyPlayerColission();
        this.bgPlayerColission();
        

        //4. recursion control

        if (this.isGameOn === true){
            requestAnimationFrame(this.gameLoop)
        }
    }
}
          

   

    


