export default class Scene {
    constructor() {
        this.id           = '';
        this.internalName = '';
        this.skip         = true;
        this.repeat       = true;

        /** @type {Actor[]} **/
        this.actors = [];
    }

    static fromScene(scene) {
        const newScene= new Scene();
        newScene.id           = scene.id;
        newScene.internalName = scene.internalName;
        newScene.skip         = scene.skip ;
        newScene.repeat       = scene.repeat ;
        newScene.actors       = [...scene.actors];

        return newScene;
    }

    serialize() {
        return [
            this.id,
            this.internalName,
            this.skip ? 1 : 0,
            this.repeat ? 1 : 0,
            1,
            "[" + this.actors.map(actor => actor.serialize()) + "]",
        ].join("\t");
    }
}
