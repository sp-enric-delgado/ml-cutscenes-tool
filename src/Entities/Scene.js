export default class Scene {
    constructor() {
        this.id                = '';
        this.internalName      = '';
        this.skip              = true;
        this.repeat            = true;
        this.defaultPositions  = 1;
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
}
