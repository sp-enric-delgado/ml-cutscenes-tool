import {Action} from "../../../Entities/Action";

export default function StepComponent(step = 0, delay = 0, character = "Mock", action = Action.MOVE) {
    return(
        <div>
            <ul>
                <li>
                    <label htmlFor="stepInput">Step: </label>
                    <input id="stepInput" type="number" defaultValue={step}/>
                </li>
                <li>
                    <label htmlFor="delayInput">Delay: </label>
                    <input id="delayInput" type="number" defaultValue={delay}/>
                </li>
                <li>
                    <label htmlFor="characterInput">Delay: </label>
                    <input id="characterInput" type="text" defaultValue={character}/>
                </li>
                <li>
                    <label htmlFor="actionInput">Delay: </label>
                    <select/>
                </li>
            </ul>
            <hr/>
        </div>
    )
}