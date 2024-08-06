class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowersrc;

        this.upperImage = new Image();
        this.upperImage.src = config.uppersrc;
    }

    drawLowerMap(ctx, camCenter) {
        ctx.drawImage(
            this.lowerImage,
            utils.Grid(16) + camCenter.posX - 16, utils.Grid(12) + camCenter.posY,
            this.lowerImage.width / 2, this.lowerImage.height / 2,
            0, 0,
            ctx.canvas.width, ctx.canvas.height
        );

        /*ctx.drawImage(
            this.lowerImage,
            Math.max(this.gameObjects.Winslow.posX * 32 - 64, 0), Math.max(this.gameObjects.Winslow.posY * 32 - 64, 0),
            this.lowerImage.width/2, this.lowerImage.height/2,
            0, 0,
            ctx.canvas.width, ctx.canvas.height
        );*/
    }

    drawUpperMap(ctx, camCenter) {
        ctx.drawImage(
            this.upperImage,
            0, 0
        );
    }
}


window.OverworldMaps = {
    //list of maps to be used in entire game
    TestRoom: {
        lowersrc: "assets/maps/War.png",
        uppersrc: " ",
        gameObjects: {
            Winslow: new Character({
                bPlayerControlled: true,
                posX: utils.Grid(3),
                posY: utils.Grid(3),
                src: "assets/characters/WinslowWalkSprite.png"
            })
        }
    },

        Hospital: {
            lowersrc: "assets/maps/HospitalMapBlock.png",
            uppersrc: " ",
            gameObjects: {
                Winslow: new Character({
                    posX: utils.Grid(-16),
                    posY: utils.Grid(4),
                    src: "assets/characters/WinslowWalkSprite.png",
                    bPlayerControlled: true
                })
            }
        }
    }

