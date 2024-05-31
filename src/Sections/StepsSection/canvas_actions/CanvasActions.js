import {fabric} from "fabric";
import {Action_Movement} from "../../../Entities/Action";

export function MoveCanvasElement(imageId, canvas, from, to){
    const canvasImages = canvas.getObjects();

    const currentImage = canvasImages.find(imageObject => imageObject.id === imageId);

    if (currentImage) {
        currentImage.setPositionByOrigin(
            new fabric.Point(to.x, to.y),
            'center',
            'center'
        );
    }

    canvas.renderAll();
}

export function MoveCanvasElementTimed(imageId, canvas, from, to, duration){
    const canvasImages = canvas.getObjects();

    MoveCanvasElement(imageId, canvas, Action_Movement.OFFSCREEN_LEFT, from, 0);

    const imageObject = canvasImages.find(imageObject => imageObject.id === imageId);
    if (imageObject) {
        console.log(duration);
        imageObject.animate('left', (to.x - (imageObject.width / 2)), {
            duration: duration * 1000,
            onChange: canvas.renderAll.bind(canvas),
            easing: fabric.util.ease["easeInOutQuad"]
        });
    }
}

/*
function getImagePosition(canvas, imageID){
    if (canvas === null) {
        return;
    }

    const canvasImages = canvas.getObjects();

    if(canvasImages.length === 0) return;

    const imageObject = canvasImages.find(imageObject => imageObject.id === imageID);

    if (!imageObject) {
        throw new Error(`Can't find image with id ${imageID}`);
    }

    return {
        "pos": imageObject.getPointByOrigin('center', 'center'),
    };
}
*/
