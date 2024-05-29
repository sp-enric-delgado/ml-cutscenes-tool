import {Action} from "../../../Entities/Action";

export default function StepComponent({step, onStepChanged}) {

    // const [currentAction, setCurrentAction] = useState();

    return(
        <div>
            <ul>
                <li>
                    <label htmlFor="stepInput">Step: </label>
                    <input id="stepInput" type="number" defaultValue={step.step}/>
                </li>
                <li>
                    <label htmlFor="delayInput">Delay: </label>
                    <input id="delayInput" type="number" defaultValue={step.delay}/>
                </li>
                <li>
                    <label htmlFor="characterInput">Character: </label>
                    <input id="characterInput" type="text" defaultValue={step.character}/>
                </li>
                <li>
                    <label htmlFor="actionInput">Action: </label>
                    <select id="actionInput" value={step.action} onChange={(e) => onStepChanged('action', e.target.value)}>
                        {Action.ALL_ACTIONS.map((action, index) => (
                            <option key={index} value={action}>{action}</option>
                        ))}
                    </select>
                </li>
                {Object.keys(step.params).map((param, index) => (
                        <li key={index}>
                            <label htmlFor={param}>&emsp;{param}: </label>
                            <input id={param} type={typeof(step.params[param])} defaultValue={step.params[param]}/>
                        </li>
                    ))
                }
            </ul>
            <hr/>
        </div>
    )
}