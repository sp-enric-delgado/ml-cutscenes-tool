export class Action {
    static NONE = "";
    static FADE = "Fade";
    static LOOK = "Look";
    static MOVE = "Move";
    static DIALOG = "Dialog";
    static SKILL_EFFECT = "Skill Effect";
    static WALK = "Walk";
    static CHANGE_BACKGROUND = "Change Background";
    static ANIMATION = "Animation";

    static ALL_ACTIONS = [this.NONE, this.FADE, this.LOOK, this.MOVE, this.DIALOG, this.SKILL_EFFECT, this.WALK, this.CHANGE_BACKGROUND, this.ANIMATION];
}

export class Action_Movement{
    static OFFSCREEN_LEFT;
    static LEFT_1;
    static LEFT_2;
    static LEFT_3;
    static RIGHT_1;
    static RIGHT_2;
    static RIGHT_3;
    static CENTER_1;
    static CENTER_2;
    static CENTER_3;
}