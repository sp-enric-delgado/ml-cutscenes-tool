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

    useEffect(() => {
        var cnv = new fabric.Canvas(canvasRef.current);
        cnv.setDimensions({width: CANVAS_WIDTH, height: CANVAS_HEIGHT});

        setCanvas(cnv);
    }, []);
    //#endregion

    //#region STEPS
    useEffect(() => {
        scene.actors.forEach(actor => {
            fabric.Image.fromURL(actor.getAsset(), (img) => {
                img.flipX = actor.flipped;
            })
        })

    }, [scene]);
    //#endregion

    //#region RETURN
    return (
        <div className="section">
            <div>
                <button onClick={onPreviousClicked}>Previous</button>
            </div>

            <h3>Actors</h3>
            <ul>
                {scene.actors.map((actor, idx) => <li key={idx}>{actor.id}</li>)}
            </ul>

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
