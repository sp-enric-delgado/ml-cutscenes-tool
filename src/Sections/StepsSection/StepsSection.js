import {useRef, useState, useEffect} from "react";
import { fabric } from 'fabric';

import "./styles/StepsSection.css"
import StepComponent from "./components/StepComponent";

import {CANVAS_WIDTH, CANVAS_HEIGHT} from "../../data/canvasDimensions";
import {CENTER_2, LEFT_2, positions, RIGHT_2} from "../../data/positions";

import {Action} from "../../Entities/Action";
import {MoveCanvasElementTimed, FlipCanvasElement} from "./canvas_actions/CanvasActions";

/**
 * @param {Scene} scene
 * @param {Step[]} steps
 * @returns {JSX.Element}
 */
export default function StepsSection({
                                         scene,
                                         steps,
                                         onAddStep,
                                         onModifyStep,
                                         onModifyStepParam,
                                         onRemoveStep,
                                         onPreviousClicked
}) {
    //#region CANVAS
    const [canvas, setCanvas] = useState(null);
    const canvasRef = useRef();
    //#endregion

    //#region FUNCTIONS
    useEffect(() => {
        var cnv = new fabric.Canvas(canvasRef.current);
        cnv.setDimensions({width: CANVAS_WIDTH, height: CANVAS_HEIGHT});

        setCanvas(cnv);
    }, []);

    useEffect(() => {
        canvas?.clear();

        scene.actors.forEach(actor => {
            addImageToCanvas(actor.getAsset(), {
                id: actor.id,
                type: actor.type,
                flipDir: actor.flipped === false ? "right" : "left",
                flipX: actor.flipped,
                isBackground: actor.isBackground(),
            });
        });
    }, [scene]);

    async function fabricImageFromURL(image_url) {
        return new Promise(function(resolve, reject) {
            try {
                fabric.Image.fromURL(image_url, function (image) {
                    resolve(image);
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    async function addImageToCanvas(imageURL, options){
        try{
            const img = await fabricImageFromURL(imageURL);

            img.setOptions(options);

            if (options.isBackground) {
                img.scaleToHeight(CANVAS_HEIGHT);
            }

            img.setPositionByOrigin(
                new fabric.Point(CENTER_2.x, CENTER_2.y),
                options.originX,
                options.originY,
            );

            canvas.insertAt(img, 0);
            canvas.renderAll.bind(canvas);

        } catch (error) { console.log("[CANVAS COMPONENT] COULDN'T ADD IMAGE TO CANVAS: " + error); }
    }

    function playCanvasAction(actionInfo){
        switch (actionInfo.action){
            case Action.MOVE:
                MoveCanvasElementTimed(actionInfo.id, canvas, positions[actionInfo.params.from], positions[actionInfo.params.to], actionInfo.params.duration);
                break;

            case Action.LOOK:
                FlipCanvasElement(actionInfo.id, actionInfo.params.direction, canvas);
                break;

            default:
                break;
        }
    }

    function playAllSteps(){
        const groupedSteps = groupSteps();

        console.log(groupedSteps);
    }

    function groupSteps(){
        let groupedSteps = [];

        for(let i = 0; i < steps.length; i++){
            // orderedSteps[steps[i].step] = {character: steps[i].character, action: steps[i].action};
            if (!groupedSteps[steps[i].step]) {
                groupedSteps[steps[i].step] = [];
            }

            groupedSteps[steps[i].step].push({character: steps[i].character, action: steps[i].action});
        }

        return groupedSteps;
    }
    //#endregion

    //#region RETURN
    return (
        <div className="section">
            <div>
                <button onClick={onPreviousClicked}>Previous</button>
            </div>

            <div className="body">
                <div className="canvasSection">
                    <h1 className="title">Canvas</h1>
                    <div className="canvasDiv">
                        <canvas ref={canvasRef} className="canvas"/>
                    </div>
                </div>

                <div className="stepsSection">
                    <div className="stepsSeciton--header">
                        <h1 className="title">Steps</h1>
                        <button onClick={onAddStep}>+</button>
                        <button onClick={playAllSteps}>Play All</button>
                    </div>
                    <div className="stepsSection--steps">
                    {steps.map((step, idx) =>
                            <StepComponent
                                key={idx}
                                step={step}
                                actors={scene.actors}
                                onModifyStep={(prop, value) => onModifyStep(idx, prop, value)}
                                onModifyStepParam={(param, value) => onModifyStepParam(idx, param, value)}
                                playAction={playCanvasAction}
                            />
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
    //#endregion
}
