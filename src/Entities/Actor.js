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
        this.name      = '';
        this.monster   = 0;
        this.evolution = 3;
        this.flipped   = false;

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
            return `http://sp-static-content.s3.amazonaws.com/static/monstercity/mobile/ui/backgrounds/HD/${this.image}_v1.png`
        }

        return '';
    }

    serialize() {
        if (Actor.TYPE_MONSTER === this.type) {
            return JSON.stringify({
                'id': this.id,
                'name': this.name,
                'monster': this.monster,
                'evolution': this.evolution,
                'flipped': this.flipped ? 1 : 0,
                'default_positions': 0,
                'scale': this.scale,
                'offset': this.offset,
            });
        } else if (Actor.TYPE_IMAGE === this.type) {
            return JSON.stringify({
                'id': this.id,
                'name': this.name,
                'image': this.image,
                'scale': this.scale,
                'offset': this.offset,
            });
        }

        return {};
    }
}
