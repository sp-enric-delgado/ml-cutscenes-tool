import {useRef, useState, useEffect} from "react";
import { fabric } from 'fabric';

import "./styles/StepsSection.css"
import StepComponent from "./components/StepComponent";

const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 540;

export default function StepsSection({OnPreviousClicked}) {

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
    const[steps, setSteps] = useState();
    //#endregion

    function addStep(){

    }

    return (
        <div className="section">
            <div>
                <button onClick={OnPreviousClicked}>Previous</button>
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
                        <StepComponent/>
                    </div>
                </div>
            </div>

        </div>
    );
}
