class Game {

    constructor () {
        this.bg = new Background();
        this.caveWoman = new CaveWoman();
        this.health = new Health ();
        this.spear = new Spear();
        this.enemiesArr = [];
        this.spearsArr = [];
        this.treesArr = [];
        this.isGameOn = true;
        this.frames = 1;
        this.score = 0;
        //movement property
        this.controller = {
            KeyW: {pressed: false, functionBg: this.bg.moveBgUp},
            KeyS: {pressed: false, functionBg: this.bg.moveBgDown},
            KeyA: {pressed: false, functionBg: this.bg.moveBgLeft },
            KeyD: {pressed: false, functionBg: this.bg.moveBgRight}
        }

        // Sound
        this.backgroundSong = new Audio ();
        this.backgroundSong.src = './sound/Aloha.m4a'
        this.backgroundSong.volume = 0.05;
    }


    //METHODS
    clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    spawningEnemies = () => {
        let randomFrame = Math.floor(Math.random() * 1200 + 1)

        if(this.enemiesArr === 0 || this.frames % randomFrame === 0) {
            for (let i = 0; i < 2; i++) {
                let randomSpeed = Math.random() * (11 - 6) + 1;
                let randomBgSpeed = Math.random() * (8 - 5) + 5;
                let randomPosX =  (Math.random() * (this.bg.w - this.bg.x)) + this.bg.x;
                let randomPosY =  (Math.random() * (this.bg.h - this.bg.y)) + this.bg.y;
                let enemy = new Enemies (randomPosX, randomPosY, randomSpeed, randomBgSpeed, this.caveWoman.x, this.caveWoman.y);
           
            
                this.enemiesArr.push(enemy);
            
                console.log(enemy.x, enemy.y);
            }
        }
    }

    drawAllEnemies = () => {
        this.enemiesArr.forEach((enemy) => {
            enemy.drawEnemies()
        });
    }

    spawningTrees = () => {
         if (this.treesArr.length === 0){
            let maxTrees = 15;
            for (let i = 0; i < maxTrees; i++){
                let randomPosX =  (Math.random() * ((this.bg.w / 2) - this.bg.x / 2)) + (this.bg.x /2);
                let randomPosY =  (Math.random() * ((this.bg.h / 2) - this.bg.y / 2)) + (this.bg.y /2);
                let tree = new Trees (randomPosX, randomPosY);
                this.treesArr.push(tree);
                console.log (tree.x, tree.y);
            }
        }
    }

    drawAllTreesBerries = () => {
        this.treesArr.forEach((tree) => {
            // console.log(tree.x, tree.y)
            tree.drawTree (this.frames);
            tree.drawBerry();
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
            }
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
                this.score++;
            } 
           })
        });

       }

    enemyPlayerColission = () => {
        this.enemiesArr.forEach((enemy) => {
            if (enemy.x < this.caveWoman.x + this.caveWoman.w &&
                enemy.x + enemy.w > this.caveWoman.x &&
                enemy.y < this.caveWoman.y + this.caveWoman.h &&
                enemy.h + enemy.y > this.caveWoman.y && enemy.isCollisionOn === true && this.frames % 15 === 0) {
                    enemy.isCollisionOn = false;
                    this.caveWoman.health -= 1;
                    setTimeout(() => {
                        enemy.isCollisionOn = true;
                    }, 2000);
                    console.log(this.caveWoman.health)
                }
                    
            if (this.caveWoman.health === 0){
                this.gameOver()
            }
        })
    }

    bgPlayerColission = () => {
        if(this.bg.x > (this.caveWoman.x )){
            this.bg.moveBgRight();
        }
        if((this.bg.x ) + (this.bg.w ) < this.caveWoman.x + this.caveWoman.w){
            this.bg.moveBgLeft()    
        }
        if(this.bg.y > this.caveWoman.y){
            this.bg.moveBgDown()    
        }
        if (this.bg.y + (this.bg.h) < this.caveWoman.y + this.caveWoman.h) {
            this.bg.moveBgUp()
        }
    }

    treePlayerColission = () => {
        this.treesArr.forEach((tree, index) => {
            if (tree.isBerryOn === true && this.caveWoman.health < 5 && tree.x < this.caveWoman.x + this.caveWoman.w &&
                tree.x + tree.w > this.caveWoman.x &&
                tree.y < this.caveWoman.y + this.caveWoman.h &&
                tree.h + tree.y > this.caveWoman.y) {
                    console.log ('berry colission')
                    tree.isBerryOn = false;
                    this.caveWoman.health += 1;
                    setTimeout(() => {
                        console.log('setTimeOut');
                       tree.isBerryOn = true;
                    }, 45000);
                }
              
            }) 
               
                
    }

    gameOver = () => {
        this.backgroundSong.pause();
        this.isGameOn = false;
        canvas.style.display = "none";
        gameoverScreen.style.display = "flex";
        scoreDOM.innerHTML = `Score: ${this.score}`
    }
            
    gameLoop = () => {

        this.frames++

        this.backgroundSong.play();

        //1. clean canvas
        this.clearCanvas();

        //2. drawings
        this.bg.drawBg();
        this.caveWoman.drawCaveWoman(this.controller, this.frames);
        this.spawningEnemies();
        this.drawAllEnemies();
        this.spawningTrees();
        this.drawAllTreesBerries();
        this.drawAllSpears();
        this.drawHealth();
        

        //3. actions
        this.movement();
        this.allEnemiesMoves();
        this.throwAllSpears();
        this.spearEnemyColission();
        this.enemyPlayerColission();
        this.bgPlayerColission();
        this.treePlayerColission();
        
        
        //4. recursion control

        if (this.isGameOn === true){
            requestAnimationFrame(this.gameLoop)
        }
    }
}
          

   

    


