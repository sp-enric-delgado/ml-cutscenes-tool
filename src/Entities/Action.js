export class Action {
    static NONE = "";
    // static FADE = "fade";
    static LOOK = "look";
    static MOVE = "move";
    static DIALOG = "dialog";
    // static SKILL_EFFECT = "skill_effect";
    // static WALK = "walk";
    // static CHANGE_BACKGROUND = "change_background";
    // static ANIMATION = "animation";

    static ALL = [
        this.NONE,
        // this.FADE,
        this.LOOK,
        this.MOVE,
        this.DIALOG,
        // this.SKILL_EFFECT,
        // this.WALK,
        // this.CHANGE_BACKGROUND,
        // this.ANIMATION,
    ];
}

export class Action_Movement {
    static OFFSCREEN_LEFT = "offscreen_left";
    static LEFT_1 = "left_1";
    static LEFT_2 = "left_2";
    static LEFT_3 = "left_3";
    static OFFSCREEN_RIGHT = "offscreen_right";
    static RIGHT_1 = "right_1";
    static RIGHT_2 = "right_2";
    static RIGHT_3 = "right_3";
    // static CENTER_1 = "center_1";
    static CENTER_2 = "center_2";
    // static CENTER_3 = "center_3";

    static ALL = [
        this.OFFSCREEN_LEFT,
        this.LEFT_1,
        this.LEFT_2,
        // this.CENTER_1,
        this.LEFT_3,
        this.CENTER_2,
        this.RIGHT_3,
        // this.CENTER_3,
        this.RIGHT_2,
        this.RIGHT_1,
        this.OFFSCREEN_RIGHT,
    ];
}
