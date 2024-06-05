import ActorComponent from "./components/ActorComponent";
import "./SceneSection.css"

export default function SceneSection({
                                         scene,
                                         onModifyScene,
                                         onAddActor,
                                         onRemoveActor,
                                         onModifyActor,
                                         onNextClicked
}) {
    return (
        <div className="scenesection">
            <div className="scenesection--header">
                <h1>Monster Legends Cutscene Tool</h1>
            </div>

            <div className="scenesection--body">
                <div className="section--setup">
                    <div className="section--setup-title">
                        <h2>Scene Setup</h2>
                    </div>
                    <div className="section--setup-content">
                        <div>
                            <label>Id</label>
                            <input type="number" value={scene.id}
                                   onChange={(e) => onModifyScene('id', e.target.value)}/>
                        </div>
                        <div>
                            <label>Internal name</label>
                            <input type="text" value={scene.internalName}
                                   onChange={(e) => onModifyScene('internalName', e.target.value)}/>
                        </div>
                        <div>
                            <label>Skip</label>
                            <input type="checkbox" checked={scene.skip}
                                   onChange={(e) => onModifyScene('skip', e.target.checked)}/>
                        </div>
                        <div>
                            <label>Repeat</label>
                            <input type="checkbox" checked={scene.repeat}
                                   onChange={(e) => onModifyScene('repeat', e.target.checked)}/>
                        </div>
                    </div>
                </div>

                <div className="section--actors">
                    <div className="section--actors-header">
                        <h2>Actors / Characters</h2>
                        <button onClick={onAddActor}>Add Actor</button>
                    </div>

                    <div className="section--actors-body">
                        {scene.actors.map((actor, idx) =>
                            <div key={idx} className="actor">
                                <div className="actor--name">
                                    <h2>Actor {idx + 1}</h2>
                                </div>

                                <ActorComponent
                                    actor={actor}
                                    onActorChanged={(prop, value) => onModifyActor(idx, prop, value)}
                                />
                                <div className="actor--button">
                                    <button onClick={() => onRemoveActor(idx)}>Remove</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="scenesection--footer">
                <button onClick={onNextClicked}>Next</button>
            </div>
        </div>
    );
}
