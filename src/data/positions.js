import {CANVAS_HEIGHT, CANVAS_WIDTH} from "./canvasDimensions";
import {Action_Movement} from "../Entities/Action";

export const OFFSCREEN_LEFT = {x: -100, y: CANVAS_HEIGHT / 2};
export const OFFSCREEN_RIGHT = {x: CANVAS_WIDTH + 100, y: CANVAS_HEIGHT / 2};
export const LEFT_1 = {x: 0.25 * (CANVAS_WIDTH / 2), y: CANVAS_HEIGHT / 2};
export const LEFT_2 = {x: 0.5 * (CANVAS_WIDTH / 2), y: CANVAS_HEIGHT / 2};
export const LEFT_3 = {x: 0.75*(CANVAS_WIDTH/2), y: CANVAS_HEIGHT / 2};
export const RIGHT_1 = {x: (CANVAS_WIDTH / 2) + 0.75 * (CANVAS_WIDTH / 2), y: CANVAS_HEIGHT / 2};
export const RIGHT_2 = {x: (CANVAS_WIDTH / 2) + 0.5 * (CANVAS_WIDTH / 2), y: CANVAS_HEIGHT / 2};
export const RIGHT_3 = {x: (CANVAS_WIDTH / 2) + 0.25 * (CANVAS_WIDTH / 2), y: CANVAS_HEIGHT / 2};
// export const CENTER_1": {};
export const CENTER_2 = {
    x: CANVAS_WIDTH / 2,
    y: CANVAS_HEIGHT / 2,
};
// export const CENTER_3": {};

export const positions = {
    [Action_Movement.OFFSCREEN_LEFT]: OFFSCREEN_LEFT,
    [Action_Movement.OFFSCREEN_RIGHT]: OFFSCREEN_RIGHT,
    [Action_Movement.LEFT_1]: LEFT_1,
    [Action_Movement.LEFT_2]: LEFT_2,
    [Action_Movement.LEFT_3]: LEFT_3,
    [Action_Movement.RIGHT_1]: RIGHT_1,
    [Action_Movement.RIGHT_2]: RIGHT_2,
    [Action_Movement.RIGHT_3]: RIGHT_3,
    // [Action_Movement.CENTER_1]: CENTER_1,
    [Action_Movement.CENTER_2]: CENTER_2,
    // [Action_Movement.CENTER_3]: CENTER_3
};
