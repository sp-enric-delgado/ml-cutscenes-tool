import './App.css';
import SceneSection from "./Sections/SceneSection/SceneSection";
import StepsSection from "./Sections/StepsSection/StepsSection";
import {useState} from "react";
import Scene from "./Entities/Scene";
import Actor from "./Entities/Actor";

const PAGE_SCENE = 1;
const PAGE_STEPS = 2;

export default function App() {
    const [currentPage, setCurrentPage] = useState(PAGE_SCENE);
    const [scene, setScene] = useState(new Scene());

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
        setScene(scene);

    }

    function goToSteps() {
        setCurrentPage(PAGE_STEPS);
    }

    function goToScene() {
        setCurrentPage(PAGE_SCENE);
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
                    onNextClicked={goToSteps}
                />
            </div>
            <div className={currentPage !== PAGE_STEPS ? "hidden" : ""}>
                <StepsSection
                    scene={scene}
                    onPreviousClicked={goToScene}
                />
            </div>
        </div>
    );
}

