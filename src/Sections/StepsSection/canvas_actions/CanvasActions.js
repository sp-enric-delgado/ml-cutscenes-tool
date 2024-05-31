import {fabric} from "fabric";

export function MoveCanvasElement(imageID, canvas, from, to){
    const currentPosition = GetImagePosition(canvas, imageID);
    if(currentPosition !== from) MoveCanvasElement(imageID, canvas, currentPosition, from);

    var currentImage;
    const canvasImages = canvas.getObjects();

    canvasImages.map(imageObject => {

        if(imageObject.id === imageID)
        {
            currentImage = imageObject;

            currentImage.setPositionByOrigin(
                new fabric.Point(to.x, to.y),
                'center',
                'center'
            );
        }
    });

    canvas.renderAll();
}

export function MoveCanvasElementTimed(imageID, canvas, from, to, duration){

    const canvasImages = canvas.getObjects();

    console.log("DURATION: " + duration);

    canvasImages.map(imageObject => {

        if(imageObject.id === imageID)
        {
            console.log(imageObject);
            imageObject.animate('left', (to.x - (imageObject.width / 2)), {
                duration: duration,
                onChange: canvas.renderAll.bind(canvas),
                easing: fabric.util.ease["easeInOutQuad"]
            });
        }
    });
}

function GetImagePosition(canvas, imageID){
    if(canvas === null) return;

    const canvasImages = canvas.getObjects();

    if(canvasImages.length === 0) return;

    canvasImages.map(imageObject => {
        if(imageObject.id === imageID)
        {
            return({"pos": imageObject.getPointByOrigin('center', 'center')});
        }
    });
}