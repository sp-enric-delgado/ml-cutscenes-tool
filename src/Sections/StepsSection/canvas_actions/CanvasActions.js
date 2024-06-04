import {fabric} from "fabric";
import {Action_Movement} from "../../../Entities/Action";

// export const onCanvasActionEndedEvent = new Event("onCanvasActionEnded");

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
    const imageObject = getImageObject(canvas, imageId);

    MoveCanvasElement(imageId, canvas, Action_Movement.OFFSCREEN_LEFT, from, 0);

    if (imageObject) {
        imageObject.animate('left', (to.x - (imageObject.width / 2)), {
            duration: duration * 1000,
            onChange: canvas.renderAll.bind(canvas),
            easing: fabric.util.ease["easeInOutQuad"],
            onComplete: onActionEnded,
        });
    }
}

export function FlipCanvasElement(imageId, direction, canvas){
    const imageObject = getImageObject(canvas, imageId);

    console.log(JSON.stringify(direction, null, 2));

    if (imageObject && imageObject.flipDir !== direction) {
        imageObject.set({
            flipDir: direction,
            flipX: !imageObject.flipX
        })

        canvas.renderAll();
    }

    onActionEnded();
}

export function ThrowDialogue(){
    console.log("ThrowDialogue");

    onActionEnded();
}


//#region INTERNAL FUNCTIONS
function getImageObject(canvas, imageID){
    const canvasImages = canvas.getObjects();
    return canvasImages.find(imageObject => imageObject.id === imageID);
}

function onActionEnded(step){
    // console.log("dispatching event onCanvasActionEnded");
    document.dispatchEvent(new Event("onCanvasActionEnded"));
    // debugger;
}
//#endregion
