class GameObject {
    constructor(config) {

        /*character({
            sprite: ,
            posX: ,
            posY: ,
            orient: ,
        })*/
        this.id = null;

        this.posX = config.posX || 0;
        this.posY = config.posY || 0;
        this.direction = config.direction || "down";

        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "assets/characters/Unarmed_Walk_full.png",
            useShadow: config.useShadow,
            animations: config.animations
        });
    }

    update() {

    }
}