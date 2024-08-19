import { HospitalMapWalls } from "./assets/maps/Hospital/HospitalMapWalls.js";

export class OverworldMap {
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
            utils.Grid(7.5) - (camCenter.posX), utils.Grid(5) - (camCenter.posY),
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


export const OverworldMaps = {
    //list of maps to be used in entire game

        Hospital: {
            lowersrc: "assets/maps/HospitalMapBlock.png",
            uppersrc: " ",
            gameObjects: {
                Winslow: new Character({
                    posX: utils.Grid(8),
                    posY: utils.Grid(22),
                    src: "assets/characters/WinslowWalkAndIdle.png",
                    bPlayerControlled: true,
                    useShadow: true
                }),
                PhineasAsleep: new Character({
                    posX: utils.Grid(1.1),
                    posY: utils.Grid(9.2),
                    src: "assets/characters/PhineasAsleep.png",
                    useShadow: false,
                    animations: {"idle-down": [[0, 0]]}
                })
                
            },
           walls: HospitalMapWalls
        },

        HospitalStreet: {
            gameObjects:{
                Winslow: new Character({
                    bPlayerControlled: true
                })
            }
        }
    }

