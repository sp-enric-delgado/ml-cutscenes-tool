import './App.css';
import SceneSection from "./Sections/SceneSection/SceneSection";
import StepsSection from "./Sections/StepsSection/StepsSection";
import {useState} from "react";
import Scene from "./Entities/Scene";
import Actor from "./Entities/Actor";
import OutputSection from "./Sections/OutputSection/OutputSection";
import {Step} from "./Entities/Step";

const PAGE_SCENE = 1;
const PAGE_STEPS = 2;

export default function App() {
    const [scene, setScene] = useState(new Scene());
    const [steps, setSteps] = useState([]);
    const [currentPage, setCurrentPage] = useState(PAGE_SCENE);

    function modifyScene(prop, value) {
        const newScene = Scene.fromScene(scene);
        newScene[prop] = value;
        setScene(newScene);
    }

    function addActor() {
        const newScene = Scene.fromScene(scene);
        newScene.actors.push(new Actor());
        setScene(newScene);
    }

    function modifyActor(idx, prop, value) {
        const newScene = Scene.fromScene(scene);
        if (prop === 'type') {
            value = parseInt(value);
        }

        newScene.actors[idx][prop] = value;
        setScene(newScene);
    }

    function removeActor(idx) {
        const newScene = Scene.fromScene(scene);
        newScene.actors.splice(idx, 1);
        setScene(newScene);
    }

    function addStep(){
        setSteps([...steps, new Step()]);
    }

    function modifyStep(idx, prop, value) {
        const newSteps = [...steps];
        const newStep = Step.fromStep(steps[idx]);

        if (prop === 'action') {
            newStep.setAction(value);
        } else {
            newStep[prop] = value;
        }

        newSteps[idx] = newStep;

        setSteps(newSteps);
    }

    function modifyStepParam(idx, param, value) {
        const newSteps = [...steps];
        const newStep = Step.fromStep(steps[idx]);

        newStep.params[param] = value;

        newSteps[idx] = newStep;

        setSteps(newSteps);
    }

    function removeStep(idx) {
        const newSteps = [...steps];
        newSteps.splice(idx, 1);
        setSteps(newSteps);
    }

    function navigateTo(page) {
        setCurrentPage(page);
    }

    return (
        <div>
            <div className={currentPage !== PAGE_SCENE ? "hidden" : ""}>
                <SceneSection
                    scene={scene}
                    onModifyScene={modifyScene}
                    onAddActor={addActor}
                    onModifyActor={modifyActor}
                    onRemoveActor={removeActor}
                    onNextClicked={() => navigateTo(PAGE_STEPS)}
                />
            </div>
            <div className={currentPage !== PAGE_STEPS ? "hidden" : ""}>
                <StepsSection
                    scene={scene}
                    steps={steps}
                    onAddStep={addStep}
                    onModifyStep={modifyStep}
                    onModifyStepParam={modifyStepParam}
                    onRemoveStep={removeStep}
                    onPreviousClicked={() => navigateTo(PAGE_SCENE)}
                />
            </div>
            <OutputSection scene={scene} steps={steps} />
        </div>
    );
}

