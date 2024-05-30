import {useRef, useState, useEffect} from "react";
import { fabric } from 'fabric';

import "./styles/StepsSection.css"
import StepComponent from "./components/StepComponent";

const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 540;

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
        scene.actors.forEach(actor => {
            addImageToCanvas(actor.getAsset(), {
                id: actor.id,
                type: actor.type,
                flipX: actor.flipped
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

            canvas.insertAt(img, 0);
            canvas.renderAll.bind(canvas);

        } catch (error) { console.log("[CANVAS COMPONENT] COULDN'T ADD IMAGE TO CANVAS: " + error); }
    }

    function addStep(){
        setSteps([...steps, new Step()]);
    }

    function onStepChanged(idx, prop, value) {
        const newSteps = [...steps];

        if (prop === 'action') {
            newSteps[idx].setAction(value);
        } else {
            newSteps[idx][prop] = value;
        }

        setSteps(newSteps);
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
                    </div>
                    <div className="stepsSection--steps">
                        {steps.map((step, idx) =>
                            <StepComponent
                                key={idx}
                                step={step}
                                actors={scene.actors}
                                onModifyStep={(prop, value) => onModifyStep(idx, prop, value)}
                                onModifyStepParam={(param, value) => onModifyStepParam(idx, param, value)}
                            />
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
    //#endregion
}
