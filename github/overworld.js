class Overworld {
    constructor(config) {
        this.element = config.element;

        this.bgcanvas = this.element.querySelector(".background-canvas");
        this.bgctx = this.bgcanvas.getContext("2d");

        this.gamecanvas = this.element.querySelector(".game-canvas");
        this.gamectx = this.gamecanvas.getContext("2d");

        this.map = null;
    }

    startGameLoop() {
        const tick = () => {
            this.bgctx.clearRect(0, 0, this.bgctx.canvas.width, this.bgctx.canvas.height);
            this.gamectx.clearRect(0, 0, this.gamectx.canvas.width, this.gamectx.canvas.height);

            this.map.drawLowerMap(this.bgctx);

            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction
                })
                object.sprite.draw(this.gamectx);
            })

            this.map.drawUpperMap(this.gamectx);

            requestAnimationFrame(() => {
                tick();
            })
        }
        tick();
    }

    init() {
        this.map = new OverworldMap(window.OverworldMaps.Hospital);

        this.directionInput = new DirectionInput({world:this});
        this.directionInput.init();
        this.directionInput.direction;

        this.startGameLoop();

        console.log("Overworld Loaded");
    }
}