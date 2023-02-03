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

- List here the JS files you think you might need. 

 ## main.js
    Global variables
    All DOM manipulation 
    startGame()
    event functions()
    addEventListeners()

 ## game.js
    class Game {
        this.background + src 
        this.neanderthal objet from class
        this.spear object from class
        this.spearsArr = [];
        this.enemiesArr = [];
        this.frames
        this.is gameOn = true

        //METODOS:
        drawbg();
        clearCanvas;
        drawNeanderthal;
        neanderthalMoves;
    }

## player.js 

- Player () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;

}
- drawPlayer () {}
- movePlayer () {}
- Recommended: Inside each file you can list the functions, clases, properties and methods you will need.








# States and Transitions

- List here the different pages your game will have. For example: Start Screen, Game Screen, Win Screen, etc.

# Tasks (Optional)

- List of individual Tasks you will need to finish the game from zero to an amazing game!
- Note: If using Trello or github proyect to keep track of tasks, then you can remove this section.

# Extra Links (The links can be added later when available)

### Trello
[Link](www.your-url-here.com)

### Slides
[Link](www.your-url-here.com)