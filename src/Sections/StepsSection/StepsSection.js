import {useRef, useState, useEffect} from "react";
import { fabric } from 'fabric';

import "./styles/StepsSection.css"
import StepComponent from "./components/StepComponent";
import {Step} from "../../Entities/Step";

const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 540;

export default function StepsSection({onPreviousClicked}) {

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
    const[steps, setSteps] = useState([]);
    //#endregion

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
                        <button onClick={addStep}>+</button>
                    </div>
                    <div className="stepsSection--steps">
                        {steps.map((step, idx) =>
                            <StepComponent key={idx} step={step} onStepChanged={(prop, value) => onStepChanged(idx, prop, value)}/>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}
