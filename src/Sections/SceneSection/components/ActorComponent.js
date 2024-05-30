import Actor from "../../../Entities/Actor";
import items from "../../../data/items";

export default function ActorComponent({actor, onActorChanged}) {
    return (
        <div>
            <label>Actor type</label>
            <select value={actor.type} onChange={(e) => onActorChanged('type', e.target.value)}>
                <option value={Actor.TYPE_MONSTER}>Monster</option>
                <option value={Actor.TYPE_IMAGE}>Image</option>
            </select>
            <div>
                <label>Id</label>
                <input type="text" value={actor.id} onChange={(e) => onActorChanged('id', e.target.value)}/>
            </div>
            {actor.type === Actor.TYPE_MONSTER &&
                <div>
                    <div>
                        <label>Name</label>
                        <input type="text" value={actor.name} onChange={(e) => onActorChanged('name', e.target.value)}/>
                    </div>
                    <div>
                        <label>Monster</label>
                        <input type="text" value={actor.monster} onChange={(e) => onActorChanged('monster', e.target.value)}/>
                        <img src={`http://mci-static-s1.socialpointgames.com/static/monstercity/mobile/ui/monsters/ui_${getMonsterImage(actor.monster)}_3_v1@2x.png`} />
                        <strong>{getMonsterName(actor.monster)}</strong>
                    </div>
                    <div>
                        <label>Evolution</label>
                        <select value={actor.evolution} onChange={(e) => onActorChanged('evolution', e.target.value)}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            {/*<option>2</option>*/}
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        <label>Flipped</label>
                        <select value={actor.flipped} onChange={(e) => onActorChanged('flipped', e.target.value)}>
                            <option value="0">No</option>
                            <option value="1">Yes</option>
                        </select>
                    </div>
                    <div>
                        <label>Default positions</label>
                        <input type="text" value={actor.defaultPositions} onChange={(e) => onActorChanged('defaultPositions', e.target.value)}/>
                    </div>
                </div>
            }
            {actor.type === Actor.TYPE_IMAGE &&
                <div>
                    <label>Image</label>
                    <input type="text" value={actor.image} onChange={(e) => onActorChanged('image', e.target.value)}/>
                </div>
            }
            <div>
                <label>Scale</label>
                <input type="text" value={actor.scale} onChange={(e) => onActorChanged('scale', e.target.value)}/>
            </div>
            <div>
                <label>Offset X</label>
                <input type="text" value={actor.offset[0]} onChange={(e) => onActorChanged('offset', e.target.value)}/>
            </div>
            <div>
                <label>Offset Y</label>
                <input type="text" value={actor.offset[1]} onChange={(e) => onActorChanged('offset', e.target.value)}/>
            </div>
        </div>
    );
}

function getMonsterImage(monsterId) {
    const monster = items.find(item => item['id'] == monsterId);
    if (monster) {
        return monster['img_name'];
    }

    return '';
}


function getMonsterName(monsterId) {
    const monster = items.find(item => item['id'] == monsterId);
    if (monster) {
        console.log(monster);
        return monster['name'];
    }

    return '';
}
