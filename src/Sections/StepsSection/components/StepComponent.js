import {Action, Action_Movement} from "../../../Entities/Action";
import {LookDirection} from "../../../Entities/LookDirection";

export default function StepComponent({step, actors, onModifyStep, onModifyStepParam, playAction, isPlaying}) {
    function sendInfo() {
        playAction({action: step.action, id: step.character, params: step.params});
    }

    return(
        <div className={isPlaying ? 'step-selected' : ''}>
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
                    <select id="characterInput" value={step.character} onChange={(e) => onModifyStep('character', e.target.value)}>
                        <option></option>
                        {actors.map((actor, idx) => <option key={idx} value={actor.id}>{actor.id}</option>)}
                    </select>
                </li>
                <li>
                    <label htmlFor="actionInput">Action: </label>
                    <select id="actionInput" value={step.action} onChange={(e) => onModifyStep('action', e.target.value)}>
                        {Action.ALL.map((action, index) => (
                            <option key={index} value={action}>{action}</option>
                        ))}
                    </select>
                </li>
                {Object.keys(step.params).map((param, index) => (
                    <li key={index}>
                        <label htmlFor={param}>&emsp;{param}: </label>
                        {([Action.MOVE, Action.WALK].includes(step.action) && ["from", "to"].includes(param)) ? (
                            <select id={param} value={step.params[param]} onChange={(e) => onModifyStepParam(param, e.target.value)}>
                                <option></option>
                                {Action_Movement.ALL.map((movement, idx) => <option key={idx}>{movement}</option>)}
                            </select>
                        ) : (Action.LOOK === step.action && "direction" === param) ? (
                            <select id={param} value={step.params[param]} onChange={(e) => onModifyStepParam(param, e.target.value)}>
                                <option></option>
                                {LookDirection.ALL.map((direction, idx) => <option key={idx}>{direction}</option>)}
                            </select>
                        ) :
                            <input id={param} type="text" value={step.params[param]} onChange={(e) => onModifyStepParam(param, e.target.value)}/>
                        }
                    </li>
                ))}
            </ul>

            <button onClick={sendInfo}>Play</button>
            <hr/>
        </div>
    )
}
