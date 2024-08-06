class DirectionInput {
    constructor(config) {
        this.heldDirections = [];
        this.world = config.world;
        this.bindings = {
            "ArrowUp": "up",
            "KeyW": "up",
            "ArrowDown": "down",
            "KeyS": "down",
            "ArrowLeft": "left",
            "KeyA": "left",
            "ArrowRight": "right",
            "KeyD": "right",
        }
    }

    get direction() {
        return this.heldDirections[0];
    }

    init() {
        document.addEventListener("keydown", e => {
            console.log(e.code);

            const dir = this.bindings[e.code];

            if (dir && this.heldDirections.indexOf(dir) === -1) {
                this.heldDirections.unshift(dir);
                //console.log(this.world.gameObjects.Winslow.posX + ", " + this.world.gameObjects.Winslow.posY);
            }

        });

        document.addEventListener("keyup", e => {
            const dir = this.bindings[e.code];

            const index = this.heldDirections.indexOf(dir);

            if (index > -1) {
                this.heldDirections.splice(index, 1);
            }
        })
    }
}