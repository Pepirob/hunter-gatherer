
//GLOBAL VARIABLES
const startBtn = document.querySelector('#start-btn');
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const startScreen = document.querySelector("#start-screen");
const gameoverScreen = document.querySelector('#gameover-screen');
const restartBtn = document.querySelector("#restart-btn");
const lives = document.querySelector('#lives');
const hearts = document.querySelectorAll(".heart");

let game;
//Checking if keys are pressed
let wKey = false;
let dKey = false;
let aKey = false;
let sKey = false;

// EVENT FUNCTIONS

const startGame = () => {
    console.log('hola mundo');
    // change stages
    startScreen.style.display = "none";

    canvas.style.display = 'flex';

    lives.style.display = 'flex';

    gameoverScreen.style.display = 'none';



    // create a game 
    game = new Game();
    
    // ininitializate the game
    game.gameLoop()

}

//Player movement

const backgroundMoving = (event) => {
    //UP
    if (event.code === 'KeyW'){
        wKey = true;
        game.bg.moveBgUp();
    }


    //DOWN
    if (event.code === 'KeyS'){
        sKey = true;
        game.bg.moveBgDown();
        
    }


    //LEFT
    if (event.code === 'KeyA'){
        aKey = true;
        game.bg.moveBgLeft();
    }


    //RIGHT
    if (event.code === 'KeyD'){
        dKey = true;
        game.bg.moveBgRight();
    }


    // //UP RIGHT
    // if (aKey && dKey){
       
    //     game.bg.moveBgUpRight();
    //     console.log("funciona")
    // }
}

const enemiesRelatedToBg = (event) => {
    game.enemiesArr.forEach((enemy) => {
            //UP
    if (event.code === 'KeyW'){
        wKey = true;
        enemy.moveEnemyUp();
    }


    //DOWN
    if (event.code === 'KeyS'){
        sKey = true;
        enemy.moveEnemyDown();
        
    }


    //LEFT
    if (event.code === 'KeyA'){
        aKey = true;
        enemy.moveEnemyLeft();
    }


    //RIGHT
    if (event.code === 'KeyD'){
        dKey = true;
        enemy.moveEnemyRight();
    }
    });
}
// const pressCheck = (event) => {
//     if(event.code === 'KeyW') {
//         wKey = false;
//     }
//     if(event.code === 'KeyS') {
//         sKey = false;
//     }
//     if(event.code === 'KeyD') {
//         dKey = false;
//     }
//     if(event.code === 'KeyA') {
//         aKey = false;
//     }
// }

// Spear mechanics


const spearMechanic = (event) => {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (x > (canvas.width /2)){
        let spear = new Spear (x - game.spear.w, y, game.caveWoman.x, game.caveWoman.y);
        game.spearsArr.push(spear);
        setTimeout(() => {
            game.spearsArr.splice(0, 1)
        }, 500);
    } else {let spear = new Spear (x, y, game.caveWoman.x, game.caveWoman.y);
        game.spearsArr.push(spear);
        setTimeout(() => {
            game.spearsArr.splice(0, 1)
        }, 500);}
    
    // console.log("x: " + x + " y: " + y);
}

// ADDEVENTLISTENERS

startBtn.addEventListener('click', startGame)
window.addEventListener('keydown', backgroundMoving)
window.addEventListener('keydown', enemiesRelatedToBg)
canvas.addEventListener('click',  spearMechanic)
restartBtn.addEventListener('click', startGame)

