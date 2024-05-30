import {CANVAS_WIDTH} from "./canvasDimensions";

const positions = [
    {
        "OFFSCREEN_LEFT":  -100,
        "OFFSCREEN_RIGHT": CANVAS_WIDTH + 100,
        "LEFT_1": 0.25*(CANVAS_WIDTH/2),
        "LEFT_2": 0.5*(CANVAS_WIDTH/2),
        "LEFT_3": 0.75*(CANVAS_WIDTH/2),
        "RIGHT_1": (CANVAS_WIDTH/2) + 0.75*(CANVAS_WIDTH/2),
        "RIGHT_2": (CANVAS_WIDTH/2) + 0.5*(CANVAS_WIDTH/2),
        "RIGHT_3": (CANVAS_WIDTH/2) + 0.25*(CANVAS_WIDTH/2),
        // "CENTER_1": 0,
        "CENTER_2": CANVAS_WIDTH/2
        // "CENTER_3": 0
    }
]

export default positions;