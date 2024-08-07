class Character extends GameObject {
    constructor(config) {
        super(config);

        this.stepsRemaining = 0;

        this.bPlayerControlled = config.bPlayerControlled || false;

        this.directionUpdate = {
            "down": ["posY", 1],
            "up": ["posY", -1],
            "right": ["posX", 1],
            "left": ["posX", -1],
        }
    }

    update(state) {
        if (this.stepsRemaining > 0) {
            this.updatePos();
        }
        else {
            if (this.bPlayerControlled && state.arrow) {
                this.startBehavior(state, {
                    type: "walk",
                    direction: state.arrow
                })
            }
            this.updateSprite(state);
        }
        
    }

    startBehavior(state, behavior) {
        this.direction = behavior.direction;
        if (behavior.type === "walk") {
            console.log(state.map.isSpaceTaken(this.posX, this.posY, this.direction))
                
            this.behavior.stepsRemaining = 32;
        }
    }

    updatePos() {

        const [property, change] = this.directionUpdate[this.direction];
        this[property] += change;
        this.stepsRemaining--;

    }

    updateSprite(state) {
        if (this.bPlayerControlled && this.stepsRemaining === 0 && !state.arrow) {
            this.sprite.src = "assets/characters/IdleSpriteSheetTemplate.png";
            setTimeout(() => {
                this.sprite.setAnimation("idle-" + this.direction);
            }, 10);
            return;
        }

        if (this.stepsRemaining > 0) {
            this.sprite.src = "assets/characters/SpriteSheetWalkTemplate.png";
            this.sprite.setAnimation("walk-" + this.direction);
        }
    }
}