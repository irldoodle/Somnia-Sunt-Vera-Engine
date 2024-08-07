class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.walls = config.walls || {};

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

    isSpaceTaken(initx, inity, dir){
        return this.walls[utils.nextPos(initx, inity, dir)] || false;
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
            },
            walls: {
                [utils.asMapCoord(-11, 2)]: true,
                [utils.asMapCoord(-10, 2)]: true,
                [utils.asMapCoord(-9, 2)]: true,
                [utils.asMapCoord(-8, 2)]: true,
                [utils.asMapCoord(-7, 2)]: true,
                [utils.asMapCoord(-6, 2)]: true,
                [utils.asMapCoord(-5, 2)]: true,
                [utils.asMapCoord(-4, 2)]: true,
                [utils.asMapCoord(-3, 2)]: true,
                [utils.asMapCoord(-2, 2)]: true,
                [utils.asMapCoord(-1, 2)]: true,
                [utils.asMapCoord(0, 2)]: true,
                [utils.asMapCoord(1, 2)]: true,
                [utils.asMapCoord(2, 2)]: true,
                [utils.asMapCoord(3, 2)]: true,
                [utils.asMapCoord(3, 1)]: true,
                [utils.asMapCoord(3, -1)]: true,
                [utils.asMapCoord(3, -2)]: true,
                [utils.asMapCoord(3, -3)]: true,
                [utils.asMapCoord(3, -4)]: true,
                [utils.asMapCoord(3, -5)]: true,
                [utils.asMapCoord(3, -6)]: true,
                [utils.asMapCoord(3, -7)]: true,
                [utils.asMapCoord(3, -8)]: true,
                [utils.asMapCoord(3, -9)]: true,
                [utils.asMapCoord(3, -10)]: true,
                [utils.asMapCoord(3, -11)]: true,
                [utils.asMapCoord(3, -12)]: true,
                [utils.asMapCoord(3, -13)]: true,
                [utils.asMapCoord(3, -14)]: true,
                [utils.asMapCoord(2, -14)]: true,
                [utils.asMapCoord(1, -14)]: true,
                [utils.asMapCoord(0, -14)]: true,
                [utils.asMapCoord(-1, -14)]: true,
                [utils.asMapCoord(-2, -14)]: true,
                [utils.asMapCoord(-3, -14)]: true,
                [utils.asMapCoord(-4, -14)]: true,
                [utils.asMapCoord(-5, -14)]: true,
                [utils.asMapCoord(-6, -14)]: true,
                [utils.asMapCoord(-7, -14)]: true,
                [utils.asMapCoord(-8, -14)]: true,
                [utils.asMapCoord(-9, -14)]: true,
                [utils.asMapCoord(-10, -14)]: true,
                [utils.asMapCoord(-11, -14)]: true,
                [utils.asMapCoord(-11, -13)]: true,
                [utils.asMapCoord(-11, -12)]: true,
                [utils.asMapCoord(-11, -11)]: true,
                [utils.asMapCoord(-11, -10)]: true,
                [utils.asMapCoord(-11, -9)]: true,
                [utils.asMapCoord(-11, -8)]: true,
                [utils.asMapCoord(-11, -7)]: true,
                [utils.asMapCoord(-11, -6)]: true,
                [utils.asMapCoord(-11, -5)]: true,
                [utils.asMapCoord(-11, -4)]: true,
                [utils.asMapCoord(-11, -3)]: true,
                [utils.asMapCoord(-11, -2)]: true,
                [utils.asMapCoord(-11, -1)]: true,
                [utils.asMapCoord(-11, 0)]: true,
                [utils.asMapCoord(-11, 1)]: true,
                [utils.asMapCoord(-11, 2)]: true
            }
        }
    }

