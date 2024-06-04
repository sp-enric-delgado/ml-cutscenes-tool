import Actor from "./Actor";

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

    static fromConfig(sceneConfig) {
        const newScene = new Scene();
        newScene.id            = sceneConfig.id;
        newScene.internalName  = sceneConfig.internal_name;
        newScene.skip          = sceneConfig.skip ;
        newScene.repeat        = sceneConfig.repeat ;
        newScene.actors        = sceneConfig.characters.map((actor) => Actor.fromConfig(actor));

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
