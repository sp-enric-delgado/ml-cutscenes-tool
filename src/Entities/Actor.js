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

    static fromConfig(actorConfig) {
        const actor  = new Actor();
        actor.id     = actorConfig.id;
        actor.scale  = actorConfig.scale;
        actor.offset = actorConfig.offset;

        if (typeof actorConfig.name !== "undefined") {
            actor.name = actorConfig.name;
            actor.type = Actor.TYPE_MONSTER;
        }
        if (typeof actorConfig.monster !== "undefined") actor.monster = actorConfig.monster;
        if (typeof actorConfig.evolution !== "undefined") actor.evolution = actorConfig.evolution;
        if (typeof actorConfig.flipped !== "undefined") actor.flipped = actorConfig.flipped === 1;
        if (typeof actorConfig.image !== "undefined") {
            actor.image = actorConfig.image;
            actor.type = Actor.TYPE_IMAGE;
        }

        return actor;
    }

    isBackground() {
        return Actor.TYPE_IMAGE === this.type;
    }

    isImage() {
        return Actor.TYPE_IMAGE === this.type;
    }

    isMonster() {
        return Actor.TYPE_MONSTER === this.type;
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
        if (this.isMonster()) {
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
        } else if (this.isImage()) {
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
