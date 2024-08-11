class Overworld {
    constructor(config) {
        this.element = config.element;

        this.bgcanvas = this.element.querySelector(".background-canvas");
        this.bgctx = this.bgcanvas.getContext("2d");

        this.gamecanvas = this.element.querySelector(".game-canvas");
        this.gamectx = this.gamecanvas.getContext("2d");

        this.map = null;
    }

    updateGameState(DeltaTime){
        this.bgctx.clearRect(0, 0, this.bgctx.canvas.width, this.bgctx.canvas.height);
        this.gamectx.clearRect(0, 0, this.gamectx.canvas.width, this.gamectx.canvas.height);
        
        let camCenter = this.map.gameObjects.Winslow;

        Object.values(this.map.gameObjects).forEach(object => {
            object.update({
                DeltaTime,
                arrow: this.directionInput.direction,
                map: this.map,
            })
            console.log("Winslow: " + this.map.gameObjects.Winslow.posX / 32 + ", " + this.map.gameObjects.Winslow.posY / 32 );
        });

        this.map.drawLowerMap(this.bgctx, camCenter);

        Object.values(this.map.gameObjects).forEach(object => {
            /*object.update({
                arrow: this.directionInput.direction,
                map: this.map,
            })*/
            object.sprite.draw(this.gamectx, camCenter);
        })

        this.map.drawUpperMap(this.gamectx, camCenter);
    }

    startGameLoop() {
        let previousFrameTime;
        const thisFrameTime = 1/80;
        const tick = (DeltaTime) => {
            if (this.map.isPaused){
                return;
            }
            if (previousFrameTime === undefined){
                previousFrameTime = DeltaTime;
            }
            let dt = (DeltaTime - previousFrameTime) / 1000;
            while (dt >= thisFrameTime){
                this.updateGameState(DeltaTime);
                dt -= thisFrameTime;
            }
            previousFrameTime = DeltaTime - dt *1000;
            requestAnimationFrame(tick);
        }
       requestAnimationFrame(tick);
    }

    init() {
        this.map = new OverworldMap(window.OverworldMaps.Hospital);

        this.directionInput = new DirectionInput({world:this});
        this.directionInput.init();
        //this.directionInput.direction;

        this.startGameLoop();

        console.log("Overworld Loaded");
    }
}