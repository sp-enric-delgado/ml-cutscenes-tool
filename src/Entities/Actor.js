export default class Actor {
    static TYPE_MONSTER = 1;
    static TYPE_IMAGE   = 2;

    constructor() {
        // Generic
        this.id     = '';
        this.scale  = 1;
        this.offset = [0, 0];
        this.type   = Actor.TYPE_MONSTER;

        // Monster
        this.name             = '';
        this.monster          = 0;
        this.evolution        = 3;
        this.flipped          = 0;
        this.defaultPositions = 0;

        // Image
        this.image = '';
    }
}
