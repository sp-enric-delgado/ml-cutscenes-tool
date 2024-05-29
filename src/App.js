import './App.css';
import SceneSection from "./Sections/SceneSection/SceneSection";
import StepsSection from "./Sections/StepsSection/StepsSection";
import {useState} from "react";

const PAGE_SCENE = 1;
const PAGE_STEPS = 2;

export default function App() {
    const [currentPage, setCurrentPage] = useState(PAGE_SCENE);

    function goToSteps() {
        setCurrentPage(PAGE_STEPS);
    }

    function goToScene() {
        setCurrentPage(PAGE_SCENE);
    }

    return (
        <div>
            <div className={currentPage !== PAGE_SCENE ? "hidden" : ""}>
                <SceneSection OnNextClicked={goToSteps}/>
            </div>
            <div className={currentPage !== PAGE_STEPS ? "hidden" : ""}>
                <StepsSection OnPreviousClicked={goToScene} />
            </div>
        </div>
    );
}

