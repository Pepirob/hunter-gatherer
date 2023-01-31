class Game {

    constructor () {
        this.bg = new Background();
        this.caveWoman = new CaveWoman();
        this.spear = new Spear();
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
            let randomSpeed = Math.random() * (2 - 1) + 1;
            let randomBgSpeed = Math.random() * (10 - 5) + 5;

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

    // Movement
    movement = () => {
        Object.keys(this.controller).forEach((key) => {
            // console.log("presionando")
            if(this.controller[key].pressed === true){
                // console.log("presionando")
                this.controller[key].functionBg();
                this.controller[key].functionEnemy();
            }
            // this.controller[key].pressed && this.controller[key].functionBg && this.controller[key].functionEnemy
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
                enemy.h + enemy.y > this.caveWoman.y && this.frames % 30 === 0) {
                    this.caveWoman.health--;
                    hearts.forEach(() => {
                        if(this.caveWoman.health === this.caveWoman.health - 1){
                            let heart = hearts.slice(hearts.length-1, hearts.length-2);
                            heart.style.display = 'none';
                           }
                    })
                
                    console.log(this.caveWoman.health)
                }
            if (this.caveWoman.health === 0){
                this.gameOver()
            }
        })
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

        //3. actions
        this.movement();
        this.allEnemiesMoves();
        this.throwAllSpears();
        this.spearEnemyColission();
        this.enemyPlayerColission();
        

        //4. recursion control

        if (this.isGameOn === true){
            requestAnimationFrame(this.gameLoop)
        }
    }
}
          

   

    


