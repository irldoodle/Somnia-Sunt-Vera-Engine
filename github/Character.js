class Character extends GameObject {
    constructor(config) {
        super(config);

        this.stepsRemaining = 16;

        this.bPlayerControlled = config.bPlayerControlled || false;

        this.directionUpdate = {
            "down": ["posY", 1],
            "up": ["posY", -1],
            "right": ["posX", 1],
            "left": ["posX", -1],
        }
    }

    update(state) {
        this.updatePos();
        this.updateSprite(state);

        if (this.bPlayerControlled && this.stepsRemaining === 0 && state.arrow) {
            this.direction = state.arrow;
            this.stepsRemaining = 16;
        }
    }

    updatePos() {
        if (this.stepsRemaining > 0) {
            const [property, change] = this.directionUpdate[this.direction];
            this[property] += change;
            this.stepsRemaining--;
        }
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