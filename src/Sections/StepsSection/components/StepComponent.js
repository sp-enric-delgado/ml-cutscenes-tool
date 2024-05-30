import {Action} from "../../../Entities/Action";

export default function StepComponent({step, onModifyStep}) {
    return(
        <div>
            <ul>
                <li>
                    <label htmlFor="stepInput">Step: </label>
                    <input id="stepInput" type="number" value={step.step} onChange={(e) => onModifyStep('step', e.target.value)} />
                </li>
                <li>
                    <label htmlFor="delayInput">Delay: </label>
                    <input id="delayInput" type="number" value={step.delay} onChange={(e) => onModifyStep('delay', e.target.value)} />
                </li>
                <li>
                    <label htmlFor="characterInput">Character: </label>
                    <input id="characterInput" type="text" defaultValue={step.character}/>
                </li>
                <li>
                    <label htmlFor="actionInput">Action: </label>
                    <select id="actionInput" value={step.action} onChange={(e) => onModifyStep('action', e.target.value)}>
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