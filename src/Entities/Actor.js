export default class Actor {
    static TYPE_MONSTER = 1;
    static TYPE_IMAGE   = 2;

    constructor() {
        // Generic
        this.id     = Math.random().toString(36).slice(2);
        this.scale  = 1;
        this.offset = [0, 0];
        this.type   = Actor.TYPE_MONSTER;

        // Monster
        this.name      = Math.random().toString(36).slice(2);
        this.monster   = -1;
        this.evolution = 3;
        this.flipped   = 0;
        this.default_positions = 0;

        // Image
        this.image = '';
    }
}
