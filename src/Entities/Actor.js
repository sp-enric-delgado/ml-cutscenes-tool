import items from "../data/items";

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

    getAsset() {
        if (Actor.TYPE_MONSTER === this.type) {
            const monster = items.find(item => item['id'] == this.monster);
            if (monster) {
                const img_name = monster['img_name'];
                return `http://mci-static-s1.socialpointgames.com/static/monstercity/mobile/ui/monsters/ui_${img_name}_${this.evolution}_v1@2x.png`;
            }
        } else if (Actor.TYPE_IMAGE === this.type) {

        }

        return '';
    }
}
