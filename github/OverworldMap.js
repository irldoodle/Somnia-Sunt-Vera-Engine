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
            utils.Grid(32.5) - (camCenter.posX), utils.Grid(24) - (camCenter.posY),
            // utils.Grid(16), utils.Grid(12),
            // //this.lowerImage.width / 2, this.lowerImage.height / 2,
            // 0, 0, 0, 0
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
                    posX: utils.Grid(35),
                    posY: utils.Grid(41),
                    src: "assets/characters/WinslowWalkAndIdle.png",
                    bPlayerControlled: true,
                    useShadow: true
                }),
                PhineasAsleep: new Character({
                    posX: utils.Grid(28),
                    posY: utils.Grid(28.2),
                    src: "assets/characters/PhineasAsleep.png",
                    useShadow: false,
                    animations: {"idle-down": [[0, 0]]}
                })
                
            },
            walls: {
                // Map borders

                // Top Border

                [utils.asMapCoord(28, 19)]: true,
                [utils.asMapCoord(29, 19)]: true,
                [utils.asMapCoord(30, 19)]: true,
                [utils.asMapCoord(31, 19)]: true,
                [utils.asMapCoord(32, 19)]: true,
                [utils.asMapCoord(33, 19)]: true,
                [utils.asMapCoord(34, 19)]: true,
                [utils.asMapCoord(35, 19)]: true,
                [utils.asMapCoord(36, 19)]: true,
                [utils.asMapCoord(37, 19)]: true,
                [utils.asMapCoord(38, 19)]: true,
                [utils.asMapCoord(39, 19)]: true,
                [utils.asMapCoord(40, 19)]: true,
                [utils.asMapCoord(41, 19)]: true,
                [utils.asMapCoord(42, 19)]: true,
                [utils.asMapCoord(43, 19)]: true,
                [utils.asMapCoord(44, 19)]: true,
                [utils.asMapCoord(45, 19)]: true,
                [utils.asMapCoord(46, 19)]: true,
                [utils.asMapCoord(47, 19)]: true,
                [utils.asMapCoord(48, 19)]: true,
                [utils.asMapCoord(49, 19)]: true,
                [utils.asMapCoord(50, 19)]: true,
                [utils.asMapCoord(51, 19)]: true,
                [utils.asMapCoord(52, 19)]: true,
                [utils.asMapCoord(53, 19)]: true,
                [utils.asMapCoord(54, 19)]: true,
                [utils.asMapCoord(55, 19)]: true,
                [utils.asMapCoord(56, 19)]: true,
                [utils.asMapCoord(57, 19)]: true,

                // Right Border

                [utils.asMapCoord(58, 20)]: true,
                [utils.asMapCoord(58, 21)]: true,
                [utils.asMapCoord(58, 22)]: true,
                [utils.asMapCoord(58, 23)]: true,
                [utils.asMapCoord(58, 24)]: true,
                [utils.asMapCoord(58, 25)]: true,
                [utils.asMapCoord(58, 26)]: true,
                [utils.asMapCoord(58, 27)]: true,
                [utils.asMapCoord(58, 28)]: true,
                [utils.asMapCoord(58, 29)]: true,
                [utils.asMapCoord(58, 30)]: true,
                [utils.asMapCoord(58, 31)]: true,
                [utils.asMapCoord(58, 32)]: true,
                [utils.asMapCoord(58, 33)]: true,
                [utils.asMapCoord(58, 34)]: true,
                [utils.asMapCoord(58, 35)]: true,
                [utils.asMapCoord(58, 36)]: true,
                [utils.asMapCoord(58, 37)]: true,
                [utils.asMapCoord(58, 38)]: true,
                [utils.asMapCoord(58, 39)]: true,
                [utils.asMapCoord(58, 40)]: true,
                [utils.asMapCoord(58, 41)]: true,

                // Bottom Border

                [utils.asMapCoord(28, 42)]: true,
                [utils.asMapCoord(29, 42)]: true,
                [utils.asMapCoord(30, 42)]: true,
                [utils.asMapCoord(31, 42)]: true,
                [utils.asMapCoord(32, 42)]: true,
                [utils.asMapCoord(33, 42)]: true,
                [utils.asMapCoord(34, 42)]: true,
                [utils.asMapCoord(35, 42)]: true,
                [utils.asMapCoord(36, 42)]: true,
                [utils.asMapCoord(37, 42)]: true,
                [utils.asMapCoord(38, 42)]: true,
                [utils.asMapCoord(39, 42)]: true,
                [utils.asMapCoord(40, 42)]: true,
                [utils.asMapCoord(41, 42)]: true,
                [utils.asMapCoord(42, 42)]: true,
                [utils.asMapCoord(43, 42)]: true,
                [utils.asMapCoord(44, 42)]: true,
                [utils.asMapCoord(45, 42)]: true,
                [utils.asMapCoord(46, 42)]: true,
                [utils.asMapCoord(47, 42)]: true,
                [utils.asMapCoord(48, 42)]: true,
                [utils.asMapCoord(49, 42)]: true,
                [utils.asMapCoord(50, 42)]: true,
                [utils.asMapCoord(51, 42)]: true,
                [utils.asMapCoord(52, 42)]: true,
                [utils.asMapCoord(53, 42)]: true,
                [utils.asMapCoord(54, 42)]: true,
                [utils.asMapCoord(55, 42)]: true,
                [utils.asMapCoord(56, 42)]: true,
                [utils.asMapCoord(57, 42)]: true,

                // Left Border

                [utils.asMapCoord(27, 20)]: true,
                [utils.asMapCoord(27, 21)]: true,
                [utils.asMapCoord(27, 22)]: true,
                [utils.asMapCoord(27, 23)]: true,
                [utils.asMapCoord(27, 24)]: true,
                [utils.asMapCoord(27, 25)]: true,
                [utils.asMapCoord(27, 26)]: true,
                [utils.asMapCoord(27, 27)]: true,
                [utils.asMapCoord(27, 28)]: true,
                [utils.asMapCoord(27, 29)]: true,
                [utils.asMapCoord(27, 30)]: true,
                [utils.asMapCoord(27, 31)]: true,
                [utils.asMapCoord(27, 32)]: true,
                [utils.asMapCoord(27, 33)]: true,
                [utils.asMapCoord(27, 34)]: true,
                [utils.asMapCoord(27, 35)]: true,
                [utils.asMapCoord(27, 36)]: true,
                [utils.asMapCoord(27, 37)]: true,
                [utils.asMapCoord(27, 38)]: true,
                [utils.asMapCoord(27, 39)]: true,
                [utils.asMapCoord(27, 40)]: true,
                [utils.asMapCoord(27, 41)]: true,
                
                // Rooms and Furniture

                // Front Desk

                [utils.asMapCoord(28, 37)]: true,
                [utils.asMapCoord(29, 37)]: true,
                [utils.asMapCoord(30, 37)]: true,
                [utils.asMapCoord(31, 37)]: true,
                [utils.asMapCoord(31, 38)]: true,
                [utils.asMapCoord(31, 39)]: true,
                [utils.asMapCoord(31, 40)]: true,
                [utils.asMapCoord(31, 41)]: true,

                // Front Desk Cabinet

                [utils.asMapCoord(28, 32)]: true,
                [utils.asMapCoord(28, 33)]: true,
                [utils.asMapCoord(28, 34)]: true,
                [utils.asMapCoord(28, 35)]: true,

                // Center room block

                // Bottom Wall

                [utils.asMapCoord(38, 39)]: true,
                [utils.asMapCoord(39, 39)]: true,
                [utils.asMapCoord(40, 39)]: true,
                [utils.asMapCoord(41, 39)]: true,
                [utils.asMapCoord(42, 39)]: true,
                [utils.asMapCoord(43, 39)]: true,
                [utils.asMapCoord(44, 39)]: true,
                [utils.asMapCoord(45, 39)]: true,
                [utils.asMapCoord(46, 39)]: true,
                [utils.asMapCoord(47, 39)]: true,
                [utils.asMapCoord(48, 39)]: true,
                [utils.asMapCoord(49, 39)]: true,
                [utils.asMapCoord(50, 39)]: true,
                [utils.asMapCoord(51, 39)]: true,
                [utils.asMapCoord(52, 39)]: true,
                [utils.asMapCoord(53, 39)]: true,
                [utils.asMapCoord(54, 39)]: true,

                // Right Wall

                [utils.asMapCoord(54, 23)]: true,
                [utils.asMapCoord(54, 24)]: true,
                [utils.asMapCoord(54, 25)]: true,
                [utils.asMapCoord(54, 26)]: true,
                [utils.asMapCoord(54, 27)]: true,
                [utils.asMapCoord(54, 28)]: true,
                //Door
                [utils.asMapCoord(54, 30)]: true,
                [utils.asMapCoord(54, 31)]: true,
                [utils.asMapCoord(54, 32)]: true,
                [utils.asMapCoord(54, 33)]: true,
                [utils.asMapCoord(54, 34)]: true,
                [utils.asMapCoord(54, 35)]: true,
                [utils.asMapCoord(54, 36)]: true,
                //Door
                [utils.asMapCoord(54, 38)]: true,
                [utils.asMapCoord(54, 39)]: true,

                // Top Wall

                [utils.asMapCoord(38, 23)]: true,
                [utils.asMapCoord(39, 23)]: true,
                [utils.asMapCoord(40, 23)]: true,
                [utils.asMapCoord(41, 23)]: true,
                [utils.asMapCoord(42, 23)]: true,
                [utils.asMapCoord(43, 23)]: true,
                [utils.asMapCoord(44, 23)]: true,
                [utils.asMapCoord(45, 23)]: true,
                [utils.asMapCoord(46, 23)]: true,
                [utils.asMapCoord(47, 23)]: true,
                [utils.asMapCoord(48, 23)]: true,
                [utils.asMapCoord(49, 23)]: true,
                [utils.asMapCoord(50, 23)]: true,
                [utils.asMapCoord(51, 23)]: true,
                [utils.asMapCoord(52, 23)]: true,
                [utils.asMapCoord(53, 23)]: true,

                // Left Wall
                
                [utils.asMapCoord(38, 24)]: true,
                [utils.asMapCoord(38, 25)]: true,
                [utils.asMapCoord(38, 26)]: true,
                [utils.asMapCoord(38, 27)]: true,
                [utils.asMapCoord(38, 28)]: true,
                //Door
                [utils.asMapCoord(38, 30)]: true,
                [utils.asMapCoord(38, 31)]: true,
                [utils.asMapCoord(38, 32)]: true,
                [utils.asMapCoord(38, 33)]: true,
                [utils.asMapCoord(38, 34)]: true,
                [utils.asMapCoord(38, 35)]: true,
                [utils.asMapCoord(38, 36)]: true,
                //Door
                [utils.asMapCoord(38, 38)]: true,

                // Center Room Block Dividing Walls

                // Vertical Wall 

                [utils.asMapCoord(46, 24)]: true,
                [utils.asMapCoord(46, 25)]: true,
                [utils.asMapCoord(46, 26)]: true,
                [utils.asMapCoord(46, 27)]: true,
                // Corner Furniture
                // Left Side

                [utils.asMapCoord(45, 28)]: true,
                [utils.asMapCoord(45, 29)]: true,
                [utils.asMapCoord(45, 30)]: true,
                [utils.asMapCoord(45, 31)]: true,
                [utils.asMapCoord(45, 32)]: true,
                [utils.asMapCoord(45, 33)]: true,
                [utils.asMapCoord(45, 34)]: true,

                // Right Side

                [utils.asMapCoord(47, 28)]: true,
                [utils.asMapCoord(47, 29)]: true,
                [utils.asMapCoord(47, 30)]: true,
                [utils.asMapCoord(47, 31)]: true,
                [utils.asMapCoord(47, 32)]: true,
                [utils.asMapCoord(47, 33)]: true,
                [utils.asMapCoord(47, 34)]: true,

                //

                [utils.asMapCoord(46, 35)]: true,
                [utils.asMapCoord(46, 36)]: true,
                [utils.asMapCoord(46, 37)]: true,
                [utils.asMapCoord(46, 38)]: true,

                // Horizontal Wall 

                [utils.asMapCoord(39, 31)]: true,
                [utils.asMapCoord(40, 31)]: true,
                [utils.asMapCoord(41, 31)]: true,

                [utils.asMapCoord(42, 30)]: true,
                [utils.asMapCoord(43, 30)]: true,
                [utils.asMapCoord(42, 32)]: true,
                [utils.asMapCoord(43, 32)]: true,

                [utils.asMapCoord(48, 31)]: true,

                [utils.asMapCoord(49, 30)]: true,
                [utils.asMapCoord(50, 30)]: true,
                [utils.asMapCoord(49, 32)]: true,
                [utils.asMapCoord(50, 32)]: true,

                [utils.asMapCoord(51, 31)]: true,
                [utils.asMapCoord(52, 31)]: true,
                [utils.asMapCoord(53, 31)]: true,

                // Phineas Room Block

                [utils.asMapCoord(28, 31)]: true,
                [utils.asMapCoord(29, 31)]: true,
                [utils.asMapCoord(30, 31)]: true,
                [utils.asMapCoord(31, 31)]: true,
                [utils.asMapCoord(32, 31)]: true,
                [utils.asMapCoord(33, 31)]: true,
                // Door
                [utils.asMapCoord(33, 20)]: true,
                [utils.asMapCoord(33, 21)]: true,
                [utils.asMapCoord(33, 22)]: true,
                [utils.asMapCoord(33, 23)]: true,
                //Door
                [utils.asMapCoord(33, 25)]: true,
                [utils.asMapCoord(33, 26)]: true,
                [utils.asMapCoord(33, 27)]: true,
                [utils.asMapCoord(33, 28)]: true,
                [utils.asMapCoord(33, 29)]: true,
                
                
                // Phineas Bed

                [utils.asMapCoord(28, 28)]: true,
                [utils.asMapCoord(29, 28)]: true,
                
                // Phineas Seats and Bench

                [utils.asMapCoord(28, 30)]: true,
                [utils.asMapCoord(29, 30)]: true,

                [utils.asMapCoord(32, 26)]: true,
                [utils.asMapCoord(32, 27)]: true,
                [utils.asMapCoord(32, 28)]: true,

                // Dividing Wall
                
                [utils.asMapCoord(28, 25)]: true,
                [utils.asMapCoord(29, 25)]: true,
                [utils.asMapCoord(30, 25)]: true,
                [utils.asMapCoord(31, 25)]: true,
                [utils.asMapCoord(32, 25)]: true,

                // Phineas Neighbor Bed

                [utils.asMapCoord(28, 22)]: true,
                [utils.asMapCoord(29, 22)]: true,

                //Phineas Neighbor Seats and Bench

                [utils.asMapCoord(28, 24)]: true,
                [utils.asMapCoord(29, 24)]: true,

                [utils.asMapCoord(32, 20)]: true,
                [utils.asMapCoord(32, 21)]: true,
                [utils.asMapCoord(32, 22)]: true,
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

