import ActorComponent from "./components/ActorComponent";
import {useState} from "react";
import Actor from "../../Entities/Actor";

export default function SceneSection({onNextClicked}) {
    const [actors, setActors] = useState([]);

    function onAddActor() {
        setActors([...actors, new Actor()]);
    }

    function onActorChanged(idx, prop, value) {
        const newActors = [...actors];
        if (prop === 'type') {
            value = parseInt(value);
        }

        newActors[idx][prop] = value;
        setActors(newActors);
    }

    function onRemoveActor(idx) {
        const newActors = [...actors];
        newActors.splice(idx, 1);
        console.log(newActors);
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
                <div className="clearfix">
                    {actors.map((actor, idx) =>
                        <div key={idx} className="box float">
                            <ActorComponent
                                actor={actor}
                                onActorChanged={(prop, value) => onActorChanged(idx, prop, value)}
                            />
                            <button onClick={(e) => onRemoveActor(idx)}>Remove</button>
                        </div>
                    )}
                </div>
                <button onClick={onAddActor}>Add Actor</button>
            </div>

            <button onClick={onNextClicked}>Next</button>
        </div>
    );
}
