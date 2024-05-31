export default class Scene {
    constructor() {
        this.id                = '';
        this.internalName      = '';
        this.skip              = true;
        this.repeat            = true;
        // this.defaultPositions  = 1;
        this.actors            = [];
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
        return this.id
            + "\t" + this.internalName
            + "\t" + (this.skip ? 1 : 0)
            + "\t" + (this.repeat ? 1 : 0)
            + "\t"
            + 1 + "\t"
            + "[" + this.actors.map(actor => actor.serialize()) + "]";
    }
}
