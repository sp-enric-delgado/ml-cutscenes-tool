import {Action, Action_Movement} from "./Action";
import {Animation} from "./Animation";
import {LookDirection} from "./LookDirection";

export class Step {
    constructor() {
        this.step = 0;
        this.delay = 0;
        this.character = "";
        this.setAction(Action.NONE);
    };

    setAction(action) {
        this.action = action;
        this.params = setupParams(this.action);
    }
}

function setupParams(action) {
    switch (action){
        case Action.FADE:
            return {"to": 0, "duration":0};

        case Action.LOOK:
            return {"direction": LookDirection.LEFT};

        case Action.MOVE:
            return {"from": Action_Movement.OFFSCREEN_LEFT,
                "to": Action_Movement.CENTER_1,
                "duration": 0};

        case Action.DIALOG:
            return {"dialog": ""};

        case Action.SKILL_EFFECT:
            return {"effect": "",
                "from": Action_Movement.OFFSCREEN_LEFT,
                "offset": [0,0],
                "scale": 1,
                "loop": 0,
                "wait": 1}

        case Action.WALK:
            return {"to": Action_Movement.OFFSCREEN_LEFT,
                "duration": 0}

        case Action.CHANGE_BACKGROUND:
            return {"image":"",
                "duration": 0}

        case Action.ANIMATION:
            return {"animation": Animation.BREATHE,
                "loop": 0}

        default:
            return {};
    }
}
