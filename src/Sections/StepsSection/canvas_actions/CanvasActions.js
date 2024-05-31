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
                'bottom'
            );
        }
    });

    canvas.renderAll();
}

export function MoveCanvasElementTimed(imageID, canvas, from, to, duration){

    const canvasImages = canvas.getObjects();

    canvasImages.map(imageObject => {

        if(imageObject.id === imageID)
        {
            imageObject.animate('center', to, {
                from: from,
                duration: duration,
                onChange: canvas.renderAll.bind(canvas),
                onComplete: function() {
                    canvas.renderAll();
                },
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
            return({"pos": imageObject.getPointByOrigin('bottom', 'left')});
        }
    });
}