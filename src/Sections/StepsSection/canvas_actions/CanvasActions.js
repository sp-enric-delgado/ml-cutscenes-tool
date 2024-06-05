import {fabric} from "fabric";
import {Action_Movement} from "../../../Entities/Action";

export const EVENT_ON_CANVAS_ACTION_ENDED = "onCanvasActionEnded";

function _moveCanvasElement(imageId, canvas, from, to){
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

export function moveCanvasElementTimed(imageId, canvas, from, to, duration){
    const imageObject = getImageObject(canvas, imageId);

    _moveCanvasElement(imageId, canvas, Action_Movement.OFFSCREEN_LEFT, from, 0);

    if (imageObject) {
        imageObject.animate('left', (to.x - (imageObject.width / 2)), {
            duration: !duration ? -1 : duration * 1000,
            onChange: canvas.renderAll.bind(canvas),
            easing: fabric.util.ease["easeInOutQuad"],
            onComplete: onActionEnded,
        });
    }
}

export function moveCanvasElementTimedFromCurrPosition(imageId, canvas, to, duration){
    const from = getImagePosition(canvas, imageId);

    moveCanvasElementTimed(imageId, canvas, from, to, duration);
}

export function flipCanvasElement(imageId, direction, canvas){
    const imageObject = getImageObject(canvas, imageId);

    // console.log(JSON.stringify(direction, null, 2));


    if (imageObject /*&& imageObject.flipDir !== direction*/) {
        const newDirection = direction === 'inverse' ?
            (imageObject.flipDir === 'right' ? 'left' : 'right') :
            direction;

        if (newDirection !== imageObject.flipDir) {
            imageObject.set({
                flipDir: newDirection,
                flipX: !imageObject.flipX
            });
        }

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

function onActionEnded(){
    document.dispatchEvent(new Event(EVENT_ON_CANVAS_ACTION_ENDED));
}

function getImagePosition(canvas, imageId){
    if (canvas === null) {
        return;
    }

    const imageObject = getImageObject(canvas, imageId);

    if (!imageObject) {
        throw new Error(`Can't find image with id ${imageId}`);
    }

    return  imageObject.getPointByOrigin('center', 'center');
}

//#endregion
