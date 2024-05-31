import {Action} from "../../../Entities/Action";
import {useEffect, useState} from "react";

export default function StepComponent({step, actors, onModifyStep, onModifyStepParam, playAction}) {
    const [actionInfo, setActionInfo] = useState({});
    const [sendInfo, setSendInfo] = useState(false);

    useEffect(() => {
        playAction(actionInfo);
        setSendInfo(false);
    }, [sendInfo]);

    function updateActionInfo(key, value) {
        setActionInfo({...actionInfo, [key]: value});
    }

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
                    <select id="characterInput" value={step.character} onChange={(e) => onModifyStep('character', e.target.value)}>
                        <option></option>
                        {actors.map((actor, idx) => <option key={idx} value={actor.id}>{actor.id}</option>)}
                    </select>
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
                        <input id={param} type={typeof(step.params[param])} value={step.params[param]} onChange={(e) => {onModifyStepParam(param, e.target.value); updateActionInfo(param,e.target.value)}}/>
                    </li>
                ))}
            </ul>

            <button onClick={() => setSendInfo(true)}>Play</button>
            <hr/>
        </div>
    )
}
