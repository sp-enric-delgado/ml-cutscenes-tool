import ActorComponent from "./components/ActorComponent";

export default function SceneSection({
                                         scene,
                                         onModifyScene,
                                         onAddActor,
                                         onRemoveActor,
                                         onModifyActor,
                                         onNextClicked
}) {
    return (
        <div>
            <h1>Scene</h1>
            <div>
                <label>Id</label>
                <input type="number" value={scene.id}  onChange={(e) => onModifyScene('id', e.target.value)}/>
            </div>
            <div>
                <label>Internal name</label>
                <input type="text" value={scene.internalName} onChange={(e) => onModifyScene('internalName', e.target.value)}/>
            </div>
            <div>
                <label>Skip</label>
                <input type="checkbox" checked={scene.skip} onChange={(e) => onModifyScene('skip', e.target.checked)}/>
            </div>
            <div>
                <label>Repeat</label>
                <input type="checkbox" checked={scene.repeat} onChange={(e) => onModifyScene('repeat', e.target.checked)}/>
            </div>
            <div>
                <h2>Actors / Characters</h2>
                <div className="clearfix">
                    {scene.actors.map((actor, idx) =>
                        <div key={idx} className="float box">
                            <h2>Actor {idx + 1}</h2>
                            <ActorComponent
                                actor={actor}
                                onActorChanged={(prop, value) => onModifyActor(idx, prop, value)}
                            />
                            <button onClick={() => onRemoveActor(idx)}>Remove</button>
                        </div>
                    )}
                </div>
                <button onClick={onAddActor}>Add Actor</button>
            </div>

            <button onClick={onNextClicked}>Next</button>
        </div>
    );
}
