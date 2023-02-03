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
        // Movement properties
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
        // Randomisation of the enemy respawn time rate.
        let randomFrame = Math.floor(Math.random() * 1200 + 1)

        if(this.enemiesArr === 0 || this.frames % randomFrame === 0) {
            for (let i = 0; i < 2; i++) {
                let randomSpeed = Math.random() * (15 - 8) + 1;
                let randomBgSpeed = Math.random() * (8 - 5) + 5;
                let randomPosX =  (Math.random() * (this.bg.w - this.bg.x)) + this.bg.x;
                let randomPosY =  (Math.random() * (this.bg.h - this.bg.y)) + this.bg.y;
                let enemy = new Enemies (randomPosX, randomPosY, randomSpeed, randomBgSpeed, this.caveWoman.x, this.caveWoman.y);
           
                this.enemiesArr.push(enemy);
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
            }
        }
    }

    drawAllTreesBerries = () => {
        this.treesArr.forEach((tree) => {
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
    

    // Game dynamics
    movement = () => {
        Object.keys(this.controller).forEach((key) => {
            if(this.controller[key].pressed === true){
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

    // Colissions
    spearEnemyColission = () => {
        //Iterating throught two arrays, cheking colissions betweern them.
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
                    }, 1500);
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
                    tree.isBerryOn = false;
                    this.caveWoman.health += 1;
                    setTimeout(() => {
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

        //1. Clean canvas
        this.clearCanvas();

        //2. Drawings
        this.bg.drawBg();
        this.caveWoman.drawCaveWoman(this.controller, this.frames);
        this.spawningEnemies();
        this.drawAllEnemies();
        this.spawningTrees();
        this.drawAllTreesBerries();
        this.drawAllSpears();
        this.drawHealth();
        
        //3. Actions
        this.movement();
        this.allEnemiesMoves();
        this.throwAllSpears();
        this.spearEnemyColission();
        this.enemyPlayerColission();
        this.bgPlayerColission();
        this.treePlayerColission();
        
        //4. Recursion control

        if (this.isGameOn === true){
            requestAnimationFrame(this.gameLoop)
        }
    }
        

}
          

   

    


