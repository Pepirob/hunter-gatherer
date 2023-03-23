# HUNTER-GATHERER

## [See the Game](https://pepirob.github.io/hunter-gatherer/)

# Description

A mini-game that takes us back to our origins. Embrace your primal instincts to survive in hostile nature. Defend yourself from potential predators and competitors, search for resources to satisfy your most basic needs and shelter from the cold in the warmth of a bonfire.

# MVP Functionalities

- Neanderthal moves in four directions.
- Neanderthal throws spears.
- Random generated predators with aggro and damage.
- Health system: Neanderthal and predators recieve damage.

# Backlog Functionalities

- Random generated Neanderthal enemies that throws spears.
- Gather fruits and berries with boosts
- Resting in bonfire increases spear throwing speed by time.
- Difficult lvl up phase: zombi mode.

# Proyect Structure

## main.js

Global variables:

- startBtn
- canvas
- ctx
- startScreen
- gameoverScreen
- restartBtn
- scoreDOM
- game

Event functions:

- startGame()
- keyDownCheck()
- keyUpCheck()
- spearMechanic

## game.js

- Game {

  - this.bg = objet from class
  - this.caveWoman = objet from class
  - this.health objet = from class
  - this.spear objet = from class
  - this.enemiesArr = [];
  - this.spearsArr = [];
  - this.treesArr = [];
  - this.isGameOn = true;
  - this.frames = number;
  - this.score = number;
  - this.controller = {}
  - this.backgroundSong = objet from class
  - this.backgroundSong.src = src
  - this.backgroundSong.volume = number;
    }

- clearCanvas () {}
- spawningEnemies () {}
- drawAllEnemies () {}
- spawningTrees () {}
- drawAllTreesBerries () {}
- drawAllSpears () {}
- drawHealth () {}
- movement () {}
- allEnemiesMoves () {}
- throwAllSpears () {}
- spearEnemyColission () {}
- enemyPlayerColission () {}
- bgPlayerColission () {}
- treePlayerColission () {}
- gameOver () {}
- gameLoop () {}

## cave-woman.js

- CaveWoman {

  - this.x = number;
  - this.y = number;
  - this.w = number;
  - this.h = number;
  - this.health = number;
  - this.steadyDownImage = objet from class;
  - this.steadyDownImage.src = src
  - this.movesDownImage1 = objet from class;
  - this.movesDownImage1.src = src
  - this.movesDownImage2 = objet from class;
  - this.movesDownImage2.src = src
  - this.movesUpImage1 = objet from class;
  - this.movesUpImage1.src = src
  - this.movesUpImage2 = objet from class;
  - this.movesUpImage2.src = src
  - this.movesRightImage1 = objet from class;
  - this.movesRightImage1.src = src
  - this.movesRightImage2 = objet from class;
  - this.movesRightImage2.src = src
  - this.movesLeftImage1 = objet from class;
  - this.movesLeftImage1.src = src
  - this.movesLeftImage2 = objet from class;
  - this.movesLeftImage2.src = src
    }

- drawCaveWoman () {}
- moveBgUp () {}
- moveBgDown () {}
- moveBgLeft () {}
- moveBgRight () {}

## background.js

- Background {

  - this.x = number;
  - this.y = number;
  - this.w = number;
  - this.h = number;
  - this.bonfireX = number;
  - this.bonfireY = number;
  - this.bonfireW = number;
  - this.bonfireH = number;
  - this.bgSpeed = number;
  - this.bg = objet from class
  - this.bg.src = src
  - this.bonFireImage = objet from class
  - this.bonFireImage.src = src
  - this.caveImage = objet from class
  - this.caveImage.src = src
    }

- drawBg () {}
- moveBgUp () {}

## enemies.js

- Enemies {

  - this.x = number
  - this.y = number
  - this.w = number
  - this.h = number
  - this.enemySpeed = number
  - this.enemyBgSpeed = number
  - this.playerPosX = number
  - this.playerPosY = number
  - this.lionImage = object from class
  - this.lionImage.src = src
  - this.invertedLionImage = object from class
  - this.invertedLionImage.src = src
  - this.wolfImage = object from class
  - this.wolfImage.src = src
  - this.invertedWolfImage = object from class
  - this.invertedWolfImage.src = src
  - this.randomNum = number
  - this.isCollisionOn = boolean;
    }

- drawEnemies () {}
- moveEnemyToCenter () {}

## health.js

- Health {

  - this.x = number
  - this.y = number
  - this.w = number
  - this.h = number
  - this.heartImage = object from class
  - this.heartImage.src = src
  - this.voidHeartImage = object from class
  - this.voidHeartImage.src = src
  - this.health = number
    }

- drawHeart () {}
- drawVoidHeart () {}

# spear.js

- Spear {

  - this.x = number
  - this.y = number
  - this.w = number
  - this.h = number
  - this.speed = number;
  - this.spearbgSpeed = number;
  - this.mouseX = number;
  - this.mouseY = number;
  - this.image = object from class
  - this.image.src = src
    }

- drawSpear () {}
- throwSpear () {}

## trees.js

- Trees {

  - this.x = number
  - this.y = number
  - this.w = number
  - this.h = number
  - this.berryX = number
  - this.berryY = number
  - this.berryW = number
  - this.berryH = number
  - this.image = object from class
  - this.image.src = src
  - this.image2 = object from class
  - this.image2.src = src
  - this.isBerryOn = true;
  - this.berryImage = object from class
  - this.berryImage.src = src
    }

- drawTree () {}
- drawBerry () {}

# States and Transitions

- Splash Screen
- Game Screen
- Gameover Screen

# Extra Links

### Trello

[Link](https://trello.com/b/5Cc7gPdt/hunter-gatherer-project)

### Slides

[Link](https://docs.google.com/presentation/d/160PTy9kTADu9yD-S4K76EmBPmgfW2M-TjbgvUDPYA7o/edit#slide=id.g204fea3eb71_0_549)
