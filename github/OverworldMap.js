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
                    posX: utils.Grid(-17),
                    posY: utils.Grid(2),
                    src: "assets/characters/WinslowWalkAndIdle.png",
                    bPlayerControlled: true,
                    useShadow: true
                }),
                PhineasAsleep: new GameObject({
                    posX: utils.Grid(-16),
                    posY: utils.Grid(4),
                    src: "assets/characters/PhineasAsleep.png",
                    useShadow: true,
                    animations: {"idle-down": [[0, 0]]}
                })
                
            },
            walls: {
                // Map borders

                // Bottom Border
                [utils.asMapCoord(-18, 3)]: true,
                [utils.asMapCoord(-19, 3)]: true,
                [utils.asMapCoord(-20, 3)]: true,
                [utils.asMapCoord(-21, 3)]: true,
                [utils.asMapCoord(-22, 3)]: true,
                [utils.asMapCoord(-23, 3)]: true,
                [utils.asMapCoord(-24, 3)]: true,
                [utils.asMapCoord(-15, 3)]: true,
                [utils.asMapCoord(-14, 3)]: true,
                [utils.asMapCoord(-13, 3)]: true,
                [utils.asMapCoord(-12, 3)]: true,
                [utils.asMapCoord(-11, 3)]: true,
                [utils.asMapCoord(-10, 3)]: true,
                [utils.asMapCoord(-9, 3)]: true,
                [utils.asMapCoord(-8, 3)]: true,
                [utils.asMapCoord(-7, 3)]: true,
                [utils.asMapCoord(-6, 3)]: true,
                [utils.asMapCoord(-5, 3)]: true,
                [utils.asMapCoord(-4, 3)]: true,
                [utils.asMapCoord(-3, 3)]: true,
                [utils.asMapCoord(-2, 3)]: true,
                [utils.asMapCoord(-1, 3)]: true,
                [utils.asMapCoord(0, 3)]: true,
                [utils.asMapCoord(1, 3)]: true,
                [utils.asMapCoord(2, 3)]: true,
                [utils.asMapCoord(3, 3)]: true,
                [utils.asMapCoord(4, 3)]: true,
                [utils.asMapCoord(5, 3)]: true,

                // Left Border
                [utils.asMapCoord(-25, 2)]: true,
                [utils.asMapCoord(-25, 1)]: true,
                [utils.asMapCoord(-25, 0)]: true,
                [utils.asMapCoord(-25, -1)]: true,
                [utils.asMapCoord(-25, -2)]: true,
                [utils.asMapCoord(-25, -3)]: true,
                [utils.asMapCoord(-25, -4)]: true,
                [utils.asMapCoord(-25, -5)]: true,
                [utils.asMapCoord(-25, -6)]: true,
                [utils.asMapCoord(-25, -7)]: true,
                [utils.asMapCoord(-25, -8)]: true,
                [utils.asMapCoord(-25, -9)]: true,
                [utils.asMapCoord(-25, -10)]: true,
                [utils.asMapCoord(-25, -11)]: true,
                [utils.asMapCoord(-25, -12)]: true,
                [utils.asMapCoord(-25, -13)]: true,
                [utils.asMapCoord(-25, -14)]: true,
                [utils.asMapCoord(-25, -15)]: true,
                [utils.asMapCoord(-25, -16)]: true,
                [utils.asMapCoord(-25, -17)]: true,
                [utils.asMapCoord(-25, -18)]: true,
                [utils.asMapCoord(-25, -19)]: true,

                //Top Border
                [utils.asMapCoord(-24, -20)]: true,
                [utils.asMapCoord(-23, -20)]: true,
                [utils.asMapCoord(-22, -20)]: true,
                [utils.asMapCoord(-21, -20)]: true,
                [utils.asMapCoord(-20, -20)]: true,
                [utils.asMapCoord(-19, -20)]: true,
                [utils.asMapCoord(-18, -20)]: true,
                [utils.asMapCoord(-17, -20)]: true,
                [utils.asMapCoord(-16, -20)]: true,
                [utils.asMapCoord(-15, -20)]: true,
                [utils.asMapCoord(-14, -20)]: true,
                [utils.asMapCoord(-13, -20)]: true,
                [utils.asMapCoord(-12, -20)]: true,
                [utils.asMapCoord(-11, -20)]: true,
                [utils.asMapCoord(-10, -20)]: true,
                [utils.asMapCoord(-9, -20)]: true,
                [utils.asMapCoord(-8, -20)]: true,
                [utils.asMapCoord(-7, -20)]: true,
                [utils.asMapCoord(-6, -20)]: true,
                [utils.asMapCoord(-5, -20)]: true,
                [utils.asMapCoord(-4, -20)]: true,
                [utils.asMapCoord(-3, -20)]: true,
                [utils.asMapCoord(-2, -20)]: true,
                [utils.asMapCoord(-1, -20)]: true,
                [utils.asMapCoord(0, -20)]: true,
                [utils.asMapCoord(1, -20)]: true,
                [utils.asMapCoord(2, -20)]: true,
                [utils.asMapCoord(3, -20)]: true,
                [utils.asMapCoord(4, -20)]: true,
                [utils.asMapCoord(5, -20)]: true,

                // Right Border\
                [utils.asMapCoord(6, -19)]: true,
                [utils.asMapCoord(6, -18)]: true,
                [utils.asMapCoord(6, -17)]: true,
                [utils.asMapCoord(6, -16)]: true,
                [utils.asMapCoord(6, -15)]: true,
                [utils.asMapCoord(6, -14)]: true,
                [utils.asMapCoord(6, -13)]: true,
                [utils.asMapCoord(6, -12)]: true,
                [utils.asMapCoord(6, -11)]: true,
                [utils.asMapCoord(6, -10)]: true,
                [utils.asMapCoord(6, -9)]: true,
                [utils.asMapCoord(6, -8)]: true,
                [utils.asMapCoord(6, -7)]: true,
                [utils.asMapCoord(6, -6)]: true,
                [utils.asMapCoord(6, -5)]: true,
                [utils.asMapCoord(6, -4)]: true,
                [utils.asMapCoord(6, -3)]: true,
                [utils.asMapCoord(6, -2)]: true,
                [utils.asMapCoord(6, -1)]: true,
                [utils.asMapCoord(6, 0)]: true,
                [utils.asMapCoord(6, 1)]: true,
                [utils.asMapCoord(6, 2)]: true,
                
                // Rooms and Furniture
                // Desk
                [utils.asMapCoord(-21, 2)]: true,
                [utils.asMapCoord(-21, 1)]: true,
                [utils.asMapCoord(-21, 0)]: true,
                [utils.asMapCoord(-21, -1)]: true,
                [utils.asMapCoord(-21, -2)]: true,
                [utils.asMapCoord(-22, -2)]: true,

                // Center room block
                // Bottom Wall
                [utils.asMapCoord(-12, 0)]: true,
                [utils.asMapCoord(-11, 0)]: true,
                [utils.asMapCoord(-10, 0)]: true,
                [utils.asMapCoord(-9, 0)]: true,
                [utils.asMapCoord(-8, 0)]: true,
                [utils.asMapCoord(-7, 0)]: true,
                [utils.asMapCoord(-6, 0)]: true,
                [utils.asMapCoord(-5, 0)]: true,
                [utils.asMapCoord(-4, 0)]: true,
                [utils.asMapCoord(-3, 0)]: true,
                [utils.asMapCoord(-2, 0)]: true,
                [utils.asMapCoord(-1, 0)]: true,
                [utils.asMapCoord(0, 0)]: true,
                [utils.asMapCoord(1, 0)]: true,
                [utils.asMapCoord(2, 0)]: true,
                

                // Right Wall
                [utils.asMapCoord(2, -1)]: true,
                [utils.asMapCoord(2, -3)]: true,
                [utils.asMapCoord(2, -4)]: true,
                [utils.asMapCoord(2, -5)]: true,
                [utils.asMapCoord(2, -6)]: true,
                [utils.asMapCoord(2, -7)]: true,
                [utils.asMapCoord(2, -8)]: true,
                [utils.asMapCoord(2, -9)]: true,
                [utils.asMapCoord(2, -11)]: true,
                [utils.asMapCoord(2, -12)]: true,
                [utils.asMapCoord(2, -13)]: true,
                [utils.asMapCoord(2, -14)]: true,
                [utils.asMapCoord(2, -15)]: true,
                [utils.asMapCoord(2, -16)]: true,

                // Top Wall
                [utils.asMapCoord(1, -16)]: true,
                [utils.asMapCoord(0, -16)]: true,
                [utils.asMapCoord(-1, -16)]: true,
                [utils.asMapCoord(-2, -16)]: true,
                [utils.asMapCoord(-3, -16)]: true,
                [utils.asMapCoord(-4, -16)]: true,
                [utils.asMapCoord(-5, -16)]: true,
                [utils.asMapCoord(-6, -16)]: true,
                [utils.asMapCoord(-7, -16)]: true,
                [utils.asMapCoord(-8, -16)]: true,
                [utils.asMapCoord(-9, -16)]: true,
                [utils.asMapCoord(-10, -16)]: true,
                [utils.asMapCoord(-11, -16)]: true,
                [utils.asMapCoord(-12, -16)]: true,

                // Left Wall
                [utils.asMapCoord(-12, -15)]: true,
                [utils.asMapCoord(-12, -14)]: true,
                [utils.asMapCoord(-12, -13)]: true,
                [utils.asMapCoord(-12, -12)]: true,
                [utils.asMapCoord(-12, -11)]: true,
                [utils.asMapCoord(-12, -9)]: true,
                [utils.asMapCoord(-12, -8)]: true,
                [utils.asMapCoord(-12, -7)]: true,
                [utils.asMapCoord(-12, -6)]: true,
                [utils.asMapCoord(-12, -5)]: true,
                [utils.asMapCoord(-12, -4)]: true,
                [utils.asMapCoord(-12, -3)]: true,
                [utils.asMapCoord(-12, -1)]: true,
                [utils.asMapCoord(-12, -1)]: true,
                [utils.asMapCoord(-12, 0)]: true,

                // Center Room Block Dividing Walls
                // Vertical Wall [-5, -1] - [-5, -15]
                [utils.asMapCoord(-5, -1)]: true,
                [utils.asMapCoord(-5, -2)]: true,
                [utils.asMapCoord(-5, -3)]: true,
                [utils.asMapCoord(-5, -4)]: true,
                [utils.asMapCoord(-5, -5)]: true,
                [utils.asMapCoord(-5, -6)]: true,
                [utils.asMapCoord(-5, -7)]: true,
                [utils.asMapCoord(-5, -8)]: true,
                [utils.asMapCoord(-5, -9)]: true,
                [utils.asMapCoord(-5, -10)]: true,
                [utils.asMapCoord(-5, -11)]: true,
                [utils.asMapCoord(-5, -12)]: true,
                [utils.asMapCoord(-5, -13)]: true,
                [utils.asMapCoord(-5, -14)]: true,
                [utils.asMapCoord(-5, -15)]: true,

                // Horizontal Wall [-11, -8] - [1, -8]
                [utils.asMapCoord(-11, -8)]: true,
                [utils.asMapCoord(-10, -8)]: true,
                [utils.asMapCoord(-9, -8)]: true,
                [utils.asMapCoord(-8, -8)]: true,
                [utils.asMapCoord(-7, -8)]: true,
                [utils.asMapCoord(-6, -8)]: true,
                [utils.asMapCoord(-5, -8)]: true,
                [utils.asMapCoord(-4, -8)]: true,
                [utils.asMapCoord(-3, -8)]: true,
                [utils.asMapCoord(-2, -8)]: true,
                [utils.asMapCoord(-1, -8)]: true,
                [utils.asMapCoord(0, -8)]: true,
                [utils.asMapCoord(1, -8)]: true,
            
                // Phineas Room Block
                [utils.asMapCoord(-24, -6)]: true,
                [utils.asMapCoord(-23, -6)]: true,
                [utils.asMapCoord(-22, -6)]: true,
                [utils.asMapCoord(-21, -6)]: true,
                [utils.asMapCoord(-20, -6)]: true,
                [utils.asMapCoord(-19, -6)]: true,

                
                [utils.asMapCoord(-19, -8)]: true,
                [utils.asMapCoord(-19, -9)]: true,
                [utils.asMapCoord(-19, -10)]: true,
                [utils.asMapCoord(-19, -11)]: true,
                [utils.asMapCoord(-19, -12)]: true,
                [utils.asMapCoord(-19, -13)]: true,
                [utils.asMapCoord(-19, -14)]: true,
                [utils.asMapCoord(-19, -15)]: true,
                [utils.asMapCoord(-19, -17)]: true,
                [utils.asMapCoord(-19, -18)]: true,
                [utils.asMapCoord(-19, -19)]: true,
                [utils.asMapCoord(-19, -20)]: true,

                // Phineas Bed
                [utils.asMapCoord(-24, -10)]: true,
                [utils.asMapCoord(-24, -9)]: true,
                [utils.asMapCoord(-23, -10)]: true,
                [utils.asMapCoord(-23, -9)]: true,

                // Phineas Seats and Bench
                
                [utils.asMapCoord(-20, -9)]: true,
                [utils.asMapCoord(-20, -10)]: true,
                [utils.asMapCoord(-20, -11)]: true,
                [utils.asMapCoord(-20, -12)]: true,


                // Dividing Wall
                
                [utils.asMapCoord(-20, -13)]: true,
                [utils.asMapCoord(-21, -13)]: true,
                [utils.asMapCoord(-22, -13)]: true,
                [utils.asMapCoord(-23, -13)]: true,
                [utils.asMapCoord(-24, -13)]: true,

                // Phineas Neighbor Bed
                [utils.asMapCoord(-24, -16)]: true,
                [utils.asMapCoord(-23, -16)]: true,
                [utils.asMapCoord(-24, -17)]: true,
                [utils.asMapCoord(-23, -17)]: true,

                //Phineas Neighbor Seats and Bench
                [utils.asMapCoord(-20, -18)]: true,
                [utils.asMapCoord(-20, -19)]: true,
                [utils.asMapCoord(-20, -15)]: true,
                [utils.asMapCoord(-20, -14)]: true,
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

