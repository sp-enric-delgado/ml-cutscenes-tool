import Actor from "../../../Entities/Actor";

export default function ActorComponent({actor, onActorTypeChanged}) {
    return (
        <div>
            <label>Actor type</label>
            <select value={actor.type} onChange={onActorTypeChanged}>
                <option value={Actor.TYPE_MONSTER}>Monster</option>
                <option value={Actor.TYPE_IMAGE}>Image</option>
            </select>
            <div>
                <label>Id</label>
                <input type="text" value={actor.id}/>
            </div>
            {actor.type === Actor.TYPE_MONSTER &&
                <div>
                    <div>
                        <label>Name</label>
                        <input type="text" value={actor.name} />
                    </div>
                    <div>
                        <label>Monster</label>
                        <input type="text" value={actor.monster} />
                    </div>
                    <div>
                        <label>Evolution</label>
                        <select value={actor.evolution}>
                            <option vale="0">0</option>
                            <option value="1">1</option>
                            {/*<option>2</option>*/}
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
            }
            {actor.type === Actor.TYPE_IMAGE &&
                <div>
                </div>
            }
            <hr />
        </div>
    );
}
