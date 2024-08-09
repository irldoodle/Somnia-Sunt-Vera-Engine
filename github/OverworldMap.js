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
        const {x,y} = utils.nextPos(initx, inity, dir);
        return this.walls[`${x},${y}`] || false;
    }
}


window.OverworldMaps = {
    //list of maps to be used in entire game

        Hospital: {
            lowersrc: "assets/maps/HospitalMapBlock.png",
            uppersrc: " ",
            gameObjects: {
                Winslow: new Character({
                    posX: utils.Grid(-16),
                    posY: utils.Grid(4),
                    src: "assets/characters/WinslowWalkAndIdle.png",
                    bPlayerControlled: true
                }),

                PhineasAsleep: new Character({
                    posX: utils.Grid(-15),
                    posY: utils.Grid(4),
                    src: "assets/characters/PhineasAsleep.png",
                    useShadow: false,
                    animations: {"idle": [0, 0]}
                })
            },
            walls: {
                // Map borders

                // Bottom Border
                [utils.asMapCoord(-17, 5)]: true,
                [utils.asMapCoord(-18, 5)]: true,
                [utils.asMapCoord(-19, 5)]: true,
                [utils.asMapCoord(-20, 5)]: true,
                [utils.asMapCoord(-21, 5)]: true,
                [utils.asMapCoord(-22, 5)]: true,
                [utils.asMapCoord(-23, 5)]: true,
                [utils.asMapCoord(-14, 5)]: true,
                [utils.asMapCoord(-13, 5)]: true,
                [utils.asMapCoord(-12, 5)]: true,
                [utils.asMapCoord(-11, 5)]: true,
                [utils.asMapCoord(-10, 5)]: true,
                [utils.asMapCoord(-9, 5)]: true,
                [utils.asMapCoord(-8, 5)]: true,
                [utils.asMapCoord(-7, 5)]: true,
                [utils.asMapCoord(-6, 5)]: true,
                [utils.asMapCoord(-5, 5)]: true,
                [utils.asMapCoord(-4, 5)]: true,
                [utils.asMapCoord(-3, 5)]: true,
                [utils.asMapCoord(-2, 5)]: true,
                [utils.asMapCoord(-1, 5)]: true,
                [utils.asMapCoord(0, 5)]: true,
                [utils.asMapCoord(1, 5)]: true,
                [utils.asMapCoord(2, 5)]: true,
                [utils.asMapCoord(3, 5)]: true,
                [utils.asMapCoord(4, 5)]: true,
                [utils.asMapCoord(5, 5)]: true,
                [utils.asMapCoord(6, 5)]: true,

                // Left Border
                [utils.asMapCoord(-24, 4)]: true,
                [utils.asMapCoord(-24, 3)]: true,
                [utils.asMapCoord(-24, 2)]: true,
                [utils.asMapCoord(-24, 1)]: true,
                [utils.asMapCoord(-24, 0)]: true,
                [utils.asMapCoord(-24, -1)]: true,
                [utils.asMapCoord(-24, -2)]: true,
                [utils.asMapCoord(-24, -3)]: true,
                [utils.asMapCoord(-24, -4)]: true,
                [utils.asMapCoord(-24, -5)]: true,
                [utils.asMapCoord(-24, -6)]: true,
                [utils.asMapCoord(-24, -7)]: true,
                [utils.asMapCoord(-24, -8)]: true,
                [utils.asMapCoord(-24, -9)]: true,
                [utils.asMapCoord(-24, -10)]: true,
                [utils.asMapCoord(-24, -11)]: true,
                [utils.asMapCoord(-24, -12)]: true,
                [utils.asMapCoord(-24, -13)]: true,
                [utils.asMapCoord(-24, -14)]: true,
                [utils.asMapCoord(-24, -15)]: true,
                [utils.asMapCoord(-24, -16)]: true,
                [utils.asMapCoord(-24, -17)]: true,

                //Top Border
                [utils.asMapCoord(-23, -18)]: true,
                [utils.asMapCoord(-22, -18)]: true,
                [utils.asMapCoord(-21, -18)]: true,
                [utils.asMapCoord(-20, -18)]: true,
                [utils.asMapCoord(-19, -18)]: true,
                [utils.asMapCoord(-18, -18)]: true,
                [utils.asMapCoord(-17, -18)]: true,
                [utils.asMapCoord(-16, -18)]: true,
                [utils.asMapCoord(-15, -18)]: true,
                [utils.asMapCoord(-14, -18)]: true,
                [utils.asMapCoord(-13, -18)]: true,
                [utils.asMapCoord(-12, -18)]: true,
                [utils.asMapCoord(-11, -18)]: true,
                [utils.asMapCoord(-10, -18)]: true,
                [utils.asMapCoord(-9, -18)]: true,
                [utils.asMapCoord(-8, -18)]: true,
                [utils.asMapCoord(-7, -18)]: true,
                [utils.asMapCoord(-6, -18)]: true,
                [utils.asMapCoord(-5, -18)]: true,
                [utils.asMapCoord(-4, -18)]: true,
                [utils.asMapCoord(-3, -18)]: true,
                [utils.asMapCoord(-2, -18)]: true,
                [utils.asMapCoord(-1, -18)]: true,
                [utils.asMapCoord(0, -18)]: true,
                [utils.asMapCoord(1, -18)]: true,
                [utils.asMapCoord(2, -18)]: true,
                [utils.asMapCoord(3, -18)]: true,
                [utils.asMapCoord(4, -18)]: true,
                [utils.asMapCoord(5, -18)]: true,
                [utils.asMapCoord(6, -18)]: true,

                // Right Border
                [utils.asMapCoord(7, -17)]: true,
                [utils.asMapCoord(7, -16)]: true,
                [utils.asMapCoord(7, -15)]: true,
                [utils.asMapCoord(7, -14)]: true,
                [utils.asMapCoord(7, -13)]: true,
                [utils.asMapCoord(7, -12)]: true,
                [utils.asMapCoord(7, -11)]: true,
                [utils.asMapCoord(7, -10)]: true,
                [utils.asMapCoord(7, -9)]: true,
                [utils.asMapCoord(7, -8)]: true,
                [utils.asMapCoord(7, -7)]: true,
                [utils.asMapCoord(7, -6)]: true,
                [utils.asMapCoord(7, -5)]: true,
                [utils.asMapCoord(7, -4)]: true,
                [utils.asMapCoord(7, -3)]: true,
                [utils.asMapCoord(7, -2)]: true,
                [utils.asMapCoord(7, -1)]: true,
                [utils.asMapCoord(7, 0)]: true,
                [utils.asMapCoord(7, 1)]: true,
                [utils.asMapCoord(7, 2)]: true,
                [utils.asMapCoord(7, 3)]: true,
                [utils.asMapCoord(7, 4)]: true,
                
                // Rooms and Furniture
                // Desk
                [utils.asMapCoord(-20, 4)]: true,
                [utils.asMapCoord(-20, 3)]: true,
                [utils.asMapCoord(-20, 2)]: true,
                [utils.asMapCoord(-20, 1)]: true,
                [utils.asMapCoord(-20, 0)]: true,
                [utils.asMapCoord(-21, 0)]: true,

                // Center room block
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
                
                [utils.asMapCoord(-11, -7)]: true,
                [utils.asMapCoord(-11, -6)]: true,
                [utils.asMapCoord(-11, -5)]: true,
                [utils.asMapCoord(-11, -4)]: true,
                [utils.asMapCoord(-11, -3)]: true,
                [utils.asMapCoord(-11, -2)]: true,
                [utils.asMapCoord(-11, -1)]: true,
                
                [utils.asMapCoord(-11, 1)]: true,
                [utils.asMapCoord(-11, 2)]: true,

                // Center Room Block Dividing Walls
                [utils.asMapCoord(-10, -6)]: true,
                [utils.asMapCoord(-9, -6)]: true,
                [utils.asMapCoord(-8, -6)]: true,
                [utils.asMapCoord(-7, -6)]: true,
                [utils.asMapCoord(-6, -6)]: true,
                [utils.asMapCoord(-5, -6)]: true,
                [utils.asMapCoord(-4, -6)]: true,
                [utils.asMapCoord(-3, -6)]: true,
                [utils.asMapCoord(-2, -6)]: true,
                [utils.asMapCoord(-1, -6)]: true,
                [utils.asMapCoord(0, -6)]: true,
                [utils.asMapCoord(1, -6)]: true,
                [utils.asMapCoord(2, -6)]: true,
                [utils.asMapCoord(-4, -13)]: true,
                [utils.asMapCoord(-4, -12)]: true,
                [utils.asMapCoord(-4, -11)]: true,
                [utils.asMapCoord(-4, -10)]: true,
                [utils.asMapCoord(-4, -9)]: true,
                [utils.asMapCoord(-4, -3)]: true,
                [utils.asMapCoord(-4, -2)]: true,
                [utils.asMapCoord(-4, -1)]: true,
                [utils.asMapCoord(-4, 0)]: true,
                [utils.asMapCoord(-4, 1)]: true,
                [utils.asMapCoord(-5, -4)]: true,
                [utils.asMapCoord(-5, -5)]: true,
                [utils.asMapCoord(-8, 1)]: true,
                [utils.asMapCoord(-7, 1)]: true,
                [utils.asMapCoord(-8, 0)]: true,
                [utils.asMapCoord(-7, 0)]: true,
                [utils.asMapCoord(-7, -7)]: true,
                [utils.asMapCoord(-6, -7)]: true,
                [utils.asMapCoord(-5, -8)]: true,
                [utils.asMapCoord(-7, -5)]: true,
                [utils.asMapCoord(-6, -5)]: true,
                [utils.asMapCoord(-3, -4)]: true,
                [utils.asMapCoord(-3, -5)]: true,
                [utils.asMapCoord(-2, -5)]: true,
                [utils.asMapCoord(-1, -5)]: true,
                [utils.asMapCoord(-1, -7)]: true,
                [utils.asMapCoord(-2, -7)]: true,
                [utils.asMapCoord(-3, -7)]: true,
                [utils.asMapCoord(-3, -8)]: true,
                [utils.asMapCoord(-8, -12)]: true,
                [utils.asMapCoord(-7, -12)]: true,
                [utils.asMapCoord(-8, -13)]: true,
                [utils.asMapCoord(-7, -13)]: true,
                [utils.asMapCoord(-1, -12)]: true,
                [utils.asMapCoord(0, -12)]: true,
                [utils.asMapCoord(-1, -13)]: true,
                [utils.asMapCoord(0, -13)]: true,
                [utils.asMapCoord(0, 0)]: true,
                [utils.asMapCoord(0, 1)]: true,
                [utils.asMapCoord(-1, 0)]: true,
                [utils.asMapCoord(-1, 1)]: true,

                // Phineas Room Block
                [utils.asMapCoord(-23, -4)]: true,
                [utils.asMapCoord(-22, -4)]: true,
                [utils.asMapCoord(-21, -4)]: true,
                [utils.asMapCoord(-20, -4)]: true,
                [utils.asMapCoord(-19, -4)]: true,
                [utils.asMapCoord(-18, -4)]: true,
                [utils.asMapCoord(-18, -6)]: true,
                [utils.asMapCoord(-18, -7)]: true,
                [utils.asMapCoord(-18, -8)]: true,
                [utils.asMapCoord(-18, -9)]: true,
                [utils.asMapCoord(-18, -10)]: true,
                [utils.asMapCoord(-18, -11)]: true,
                [utils.asMapCoord(-18, -12)]: true,
                [utils.asMapCoord(-18, -13)]: true,
                [utils.asMapCoord(-18, -15)]: true,
                [utils.asMapCoord(-18, -16)]: true,
                [utils.asMapCoord(-18, -17)]: true,
                [utils.asMapCoord(-19, -16)]: true,
                [utils.asMapCoord(-19, -17)]: true,

                // Phineas Bed
                /*[utils.asMapCoord(-22, -8)]: true,
                [utils.asMapCoord(-22, -7)]: true,
                [utils.asMapCoord(-23, -8)]: true,
                [utils.asMapCoord(-23, -7)]: true,*/

                // Phineas Seats and Bench
                [utils.asMapCoord(-19, -7)]: true,
                [utils.asMapCoord(-19, -8)]: true,
                [utils.asMapCoord(-19, -9)]: true,
                [utils.asMapCoord(-19, -10)]: true,


                // Dividing Wall
                [utils.asMapCoord(-19, -11)]: true,
                [utils.asMapCoord(-20, -11)]: true,
                [utils.asMapCoord(-21, -11)]: true,
                [utils.asMapCoord(-22, -11)]: true,
                [utils.asMapCoord(-23, -11)]: true,

                // Phineas Neighbor Bed
                [utils.asMapCoord(-22, -14)]: true,
                [utils.asMapCoord(-23, -14)]: true,
                [utils.asMapCoord(-22, -15)]: true,
                [utils.asMapCoord(-23, -15)]: true,

                //Phineas Neighbor Seats and Bench
                [utils.asMapCoord(-19, -16)]: true,
                [utils.asMapCoord(-19, -17)]: true,
                [utils.asMapCoord(-19, -13)]: true,
                [utils.asMapCoord(-19, -12)]: true,
            }
        }, 

        HospitalStreet: {
            gameObjects:{
                Winslow: new Character({
                    bPlayerControlled: true
                })
            }
        }
    }

