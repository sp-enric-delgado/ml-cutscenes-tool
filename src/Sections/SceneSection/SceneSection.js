import ActorComponent from "./components/ActorComponent";
import {useState} from "react";
import Actor from "../../Entities/Actor";

export default function SceneSection({onNextClicked}) {
    const [actors, setActors] = useState([]);

    function onAddActor() {
        setActors([...actors, new Actor()]);
    }

    function onActorTypeChanged(e, idx) {
        const newActors = [...actors];
        newActors[idx].type = parseInt(e.target.value);
        setActors(newActors);
    }

    return (
        <div>
            <h1>Scene</h1>
            <div>
                <label>Internal name</label>
                <input type="text" />
            </div>
            <div>
                <label>Skip</label>
                <input type="checkbox" />
            </div>
            <div>
                <label>Repeat</label>
                <input type="checkbox" />
            </div>
            <div>
                <h2>Actors / Characters</h2>
                {actors.map((actor, idx) =>
                    <ActorComponent key={idx} actor={actor} onActorTypeChanged={(e) => onActorTypeChanged(e, idx)}/>
                )}
                <button onClick={onAddActor}>Add Actor</button>
            </div>

            <button onClick={onNextClicked}>Next</button>
        </div>
    );
}
