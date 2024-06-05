import {useRef, useState, useEffect} from "react";
import {fabric} from 'fabric';

import "./styles/StepsSection.css"
import StepComponent from "./components/StepComponent";

import {CANVAS_WIDTH, CANVAS_HEIGHT} from "../../data/canvasDimensions";
import {CENTER_2, MOVEMENT_TO_POSITION} from "../../data/positions";

import {Action} from "../../Entities/Action";
import * as CanvasActions from "./canvas_actions/CanvasActions";

let playingStep = 0;
let continuousPlay = false;

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
    const [uiPlayingStep, setUiPlayingStep] = useState(0);
    //#endregion

    //#region FUNCTIONS
    useEffect(() => {
        const cnv = new fabric.Canvas(canvasRef.current);
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
    }, [canvas, scene]);

    useEffect(() => {
        document.addEventListener(CanvasActions.EVENT_ON_CANVAS_ACTION_ENDED, onCanvasActionEnded);

        return () => {
            document.removeEventListener(CanvasActions.EVENT_ON_CANVAS_ACTION_ENDED, onCanvasActionEnded);
        }
    }, [canvas, steps, uiPlayingStep])

    function onCanvasActionEnded() {
        if (!continuousPlay) {
            return;
        }

        setUiPlayingStep(playingStep + 1);

        playingStep++;

        if (playingStep > steps.length - 1) {
            continuousPlay = false;
            return;
        }

        playStep(steps[playingStep]);
    }

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

    /**
     * @param {{id: string, action: string, params: Object}} actionInfo
     */
    function playCanvasAction(actionInfo){
        switch (actionInfo.action){
            case Action.MOVE:
            case Action.WALK:
                CanvasActions.moveCanvasElementTimed(actionInfo.id, canvas, MOVEMENT_TO_POSITION[actionInfo.params.to], actionInfo.params.duration);
                break;

            case Action.LOOK:
                CanvasActions.flipCanvasElement(actionInfo.id, actionInfo.params.direction, canvas);
                break;

            case Action.DIALOG:
                CanvasActions.ThrowDialogue(actionInfo.id, canvas);
                break;

            default:
                onCanvasActionEnded();
                break;
        }
    }

    function playAllSteps(){
        playingStep = 0;
        continuousPlay = true;

        playStep(steps[playingStep]);
    }

    /**
     * @param {Step} step
     */
    function playStep(step) {
        const actionInfo = {
            action: steps[playingStep].action,
            id: steps[playingStep].character,
            params: steps[playingStep].params,
        };

        setTimeout(() => {
            playCanvasAction(actionInfo);
        }, step.delay * 1000);
    }

    /*function groupSteps(){
        let groupedSteps = [];

        for(let i = 0; i < steps.length; i++){
            // orderedSteps[steps[i].step] = {character: steps[i].character, action: steps[i].action};
            if (!groupedSteps[steps[i].step]) {
                groupedSteps[steps[i].step] = [];
            }

            groupedSteps[steps[i].step].push({character: steps[i].character, action: steps[i].action});
        }

        return groupedSteps;
    }*/
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
                                isPlaying={idx === playingStep}
                            />
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
    //#endregion
}
