import './App.css';
import SceneSection from "./Sections/SceneSection/SceneSection";
import StepsSection from "./Sections/StepsSection/StepsSection";
import {useState} from "react";
import Scene from "./Entities/Scene";
import Actor from "./Entities/Actor";
import OutputSection from "./Sections/OutputSection/OutputSection";
import {Step} from "./Entities/Step";

const PAGE_SCENE = 1;
const PAGE_STEPS = 2;

export default function App() {
    //const [scene, setScene] = useState(new Scene());
    const [scene, setScene] = useState(Scene.fromConfig({
        "id": 4206,
        "internal_name": "E3CH10_DarkVoltaik_n6",
        "skip": 1,
        "repeat": 1,
        "default_positions": 1,
        "characters": [
            {
                "id": "metro_roof_1",
                "scale": 0.5,
                "offset": [
                    200,
                    250
                ],
                "image": "bg-quest-island-170"
            },
            {
                "id": "Emerald Nathura",
                "name": "monster_emeraldnathura_nameKey",
                "monster": 2853,
                "scale": 1.5,
                "offset": [
                    0,
                    50
                ],
                "evolution": 3,
                "flipped": 1,
                "default_positions": 0
            },
            {
                "id": "Dark VoltaiK",
                "name": "monster_darkvoltaik_nameKey",
                "monster": 2878,
                "scale": 1.6,
                "offset": [
                    0,
                    50
                ],
                "evolution": 3,
                "flipped": 0,
                "default_positions": 0
            }
        ],
    }));
    //const [steps, setSteps] = useState([]);
    const [steps, setSteps] = useState(Step.listFromConfig([
        {
            "__bsid": "0003VA0000RAWRHQVQZPKHD3P3",
            "scene_id": 4206,
            "step": 0,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "move",
            "params": {
                "to": "right_1"
            },
            "dialog": null
        },
        {
            "__bsid": "0003VB0000PVE3SBPECYZ9TDP9",
            "scene_id": 4206,
            "step": 0,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "move",
            "params": {
                "to": "offscreen_left"
            },
            "dialog": null
        },
        {
            "__bsid": "0003VC0000R8VF8X0PD68E9VTT",
            "scene_id": 4206,
            "step": 1,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "walk",
            "params": {
                "to": "left_1",
                "duration": 3
            },
            "dialog": null
        },
        {
            "__bsid": "0003VD0000WQ98AJSYY4NSPJ38",
            "scene_id": 4206,
            "step": 10,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text1_Key"
        },
        {
            "__bsid": "0003VE0000KWK1XEDJNR6AJKHF",
            "scene_id": 4206,
            "step": 20,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text2_Key"
        },
        {
            "__bsid": "0003VF0000HQE2GMZGDF4N41TB",
            "scene_id": 4206,
            "step": 21,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "look",
            "params": {
                "direction": "inverse"
            },
            "dialog": null
        },
        {
            "__bsid": "0003VG00005KQGBH1GXKYS9KSB",
            "scene_id": 4206,
            "step": 30,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text3_Key"
        },
        {
            "__bsid": "0003VH0000725X8QNPPPSX5F2G",
            "scene_id": 4206,
            "step": 31,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "look",
            "params": {
                "direction": "inverse"
            },
            "dialog": null
        },
        {
            "__bsid": "0003VJ0000WC57F5H6BY9NPXXY",
            "scene_id": 4206,
            "step": 40,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text4_Key"
        },
        {
            "__bsid": "0003VK00009ZE4P3EYZ9CBP4N3",
            "scene_id": 4206,
            "step": 50,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text5_Key"
        },
        {
            "__bsid": "0003VM0000VWFKB134KDBD4B0X",
            "scene_id": 4206,
            "step": 51,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "move",
            "params": {
                "to": "right_3",
                "duration": 1
            },
            "dialog": null
        },
        {
            "__bsid": "0003VN0000VRKCZFQNQKH8AP4W",
            "scene_id": 4206,
            "step": 60,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text6_Key"
        },
        {
            "__bsid": "0003VP0000G8V1A362YJ48VFR9",
            "scene_id": 4206,
            "step": 70,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text7_Key"
        },
        {
            "__bsid": "0003VQ00002MXJ6S971VN07616",
            "scene_id": 4206,
            "step": 80,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text8_Key"
        },
        {
            "__bsid": "0003VR0000PMBRBRQKCB464FW6",
            "scene_id": 4206,
            "step": 81,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "look",
            "params": {
                "direction": "inverse"
            },
            "dialog": null
        },
        {
            "__bsid": "0003VS0000Q2GWFVHHKT9NH874",
            "scene_id": 4206,
            "step": 90,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text9_Key"
        },
        {
            "__bsid": "0003VT0000AMJXRDK0JR6P1Q5Q",
            "scene_id": 4206,
            "step": 100,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text10_Key"
        },
        {
            "__bsid": "0003VV0000BTANE435ZJEBXA73",
            "scene_id": 4206,
            "step": 110,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text11_Key"
        },
        {
            "__bsid": "0003VW00003PFNKF0Y8A1ZNG3W",
            "scene_id": 4206,
            "step": 111,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "look",
            "params": {
                "direction": "inverse"
            },
            "dialog": null
        },
        {
            "__bsid": "0003VX00003PNAJY71VP2XWR7K",
            "scene_id": 4206,
            "step": 120,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text12_Key"
        },
        {
            "__bsid": "0003VY00004H0AHP58NBMHN6VZ",
            "scene_id": 4206,
            "step": 121,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "move",
            "params": {
                "to": "left_3",
                "duration": 1
            },
            "dialog": null
        },
        {
            "__bsid": "0003VZ0000NSKRMBQ83Y8EP1NC",
            "scene_id": 4206,
            "step": 130,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text13_Key"
        },
        {
            "__bsid": "0003W00000D34S6B35SYY9N768",
            "scene_id": 4206,
            "step": 140,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text14_Key"
        },
        {
            "__bsid": "0003W10000VGH3KXJZK2E4VEP4",
            "scene_id": 4206,
            "step": 221,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "animation",
            "params": {
                "animation": "attack",
                "wait": 0
            },
            "dialog": null
        },
        {
            "__bsid": "0003W20000P82RM2V6WBBH0C12",
            "scene_id": 4206,
            "step": 221,
            "delay": 0.6,
            "character": "Dark VoltaiK",
            "action": "fade",
            "params": {
                "to": 0,
                "duration": 0
            },
            "dialog": null
        },
        {
            "__bsid": "0003W3000017HWSVRFQN69Q4XW",
            "scene_id": 4206,
            "step": 150,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text15_Key"
        },
        {
            "__bsid": "0003W40000QSH5CVNHJEZ981P0",
            "scene_id": 4206,
            "step": 151,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "look",
            "params": {
                "direction": "inverse"
            },
            "dialog": null
        },
        {
            "__bsid": "0003W500003PGX3JVNJ12DCZPZ",
            "scene_id": 4206,
            "step": 223,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "fade",
            "params": {
                "to": 255,
                "duration": 0
            },
            "dialog": null
        },
        {
            "__bsid": "0003W60000Z3F5WHSKRTPC1Y52",
            "scene_id": 4206,
            "step": 160,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text16_Key"
        },
        {
            "__bsid": "0003W700002Q1047FN75NHCJHV",
            "scene_id": 4206,
            "step": 170,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text17_Key"
        },
        {
            "__bsid": "0003W800002S2TN169Q1BT40GT",
            "scene_id": 4206,
            "step": 171,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "look",
            "params": {
                "direction": "inverse"
            },
            "dialog": null
        },
        {
            "__bsid": "0003W900009574482CC6KFKXTG",
            "scene_id": 4206,
            "step": 172,
            "delay": 0.3,
            "character": "Emerald Nathura",
            "action": "move",
            "params": {
                "to": "center_2",
                "duration": 0.5
            },
            "dialog": null
        },
        {
            "__bsid": "0003WA0000G9MEVFGMZ558J8ZS",
            "scene_id": 4206,
            "step": 180,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text18_Key"
        },
        {
            "__bsid": "0003WB0000ZKDR54GPVKADZWCW",
            "scene_id": 4206,
            "step": 181,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "look",
            "params": {
                "direction": "inverse"
            },
            "dialog": null
        },
        {
            "__bsid": "0003WC0000TXJWG3CCGVDHQ07N",
            "scene_id": 4206,
            "step": 182,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "move",
            "params": {
                "to": "right_1",
                "duration": 2
            },
            "dialog": null
        },
        {
            "__bsid": "0003WD0000KZJFBDN5GME8GF1Y",
            "scene_id": 4206,
            "step": 190,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text19_Key"
        },
        {
            "__bsid": "0003WE00004QK0F3X5WB1Z28AA",
            "scene_id": 4206,
            "step": 191,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "look",
            "params": {
                "direction": "inverse"
            },
            "dialog": null
        },
        {
            "__bsid": "0003WF0000RARGNQSMTSTBC4BF",
            "scene_id": 4206,
            "step": 200,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text20_Key"
        },
        {
            "__bsid": "0003WG0000QDG6NTYX6ZPQANWG",
            "scene_id": 4206,
            "step": 210,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text21_Key"
        },
        {
            "__bsid": "0003WH0000P5BEAE5BHVNZ28K5",
            "scene_id": 4206,
            "step": 211,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "look",
            "params": {
                "direction": "inverse"
            },
            "dialog": null
        },
        {
            "__bsid": "0003WJ000002YJR167NNZTDYMH",
            "scene_id": 4206,
            "step": 220,
            "delay": null,
            "character": "Emerald Nathura",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text22_Key"
        },
        {
            "__bsid": "0003WK00006WST94N9FTJ8CGH5",
            "scene_id": 4206,
            "step": 222,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "move",
            "params": {
                "to": "right_2"
            },
            "dialog": null
        },
        {
            "__bsid": "0003WM0000E6HJEA8YVSAJKS4N",
            "scene_id": 4206,
            "step": 230,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "dialog",
            "params": null,
            "dialog": "E3S10_N22_text23_Key"
        },
        {
            "__bsid": "0003WN0000NR0V0G54QC1TKCYC",
            "scene_id": 4206,
            "step": 222,
            "delay": null,
            "character": "Dark VoltaiK",
            "action": "animation",
            "params": {
                "animation": "breathe",
                "loop": 0
            },
            "dialog": null
        },
    ]));
    const [currentPage, setCurrentPage] = useState(PAGE_SCENE);

    function modifyScene(prop, value) {
        const newScene = Scene.fromScene(scene);
        newScene[prop] = value;
        setScene(newScene);
    }

    function addActor() {
        const newScene = Scene.fromScene(scene);
        newScene.actors.push(new Actor());
        setScene(newScene);
    }

    function modifyActor(idx, prop, value) {
        const newScene = Scene.fromScene(scene);
        if (prop === 'type') {
            value = parseInt(value);
        }

        newScene.actors[idx][prop] = value;
        setScene(newScene);
    }

    function removeActor(idx) {
        const newScene = Scene.fromScene(scene);
        newScene.actors.splice(idx, 1);
        setScene(newScene);
    }

    function addStep(){
        setSteps([...steps, new Step()]);
    }

    function modifyStep(idx, prop, value) {
        const newSteps = [...steps];
        const newStep = Step.fromStep(steps[idx]);

        if (prop === 'action') {
            newStep.setAction(value);
        } else {
            newStep[prop] = value;
        }

        newSteps[idx] = newStep;

        setSteps(newSteps);
    }

    function modifyStepParam(idx, param, value) {
        const newSteps = [...steps];
        const newStep = Step.fromStep(steps[idx]);

        newStep.params[param] = value;

        newSteps[idx] = newStep;

        setSteps(newSteps);
    }

    function removeStep(idx) {
        const newSteps = [...steps];
        newSteps.splice(idx, 1);
        setSteps(newSteps);
    }

    function navigateTo(page) {
        setCurrentPage(page);
    }

    return (
        <div>
            <div className={currentPage !== PAGE_SCENE ? "hidden" : ""}>
                <SceneSection
                    scene={scene}
                    onModifyScene={modifyScene}
                    onAddActor={addActor}
                    onModifyActor={modifyActor}
                    onRemoveActor={removeActor}
                    onNextClicked={() => navigateTo(PAGE_STEPS)}
                />
            </div>
            <div className={currentPage !== PAGE_STEPS ? "hidden" : ""}>
                <StepsSection
                    scene={scene}
                    steps={steps}
                    onAddStep={addStep}
                    onModifyStep={modifyStep}
                    onModifyStepParam={modifyStepParam}
                    onRemoveStep={removeStep}
                    onPreviousClicked={() => navigateTo(PAGE_SCENE)}
                />
            </div>
            <OutputSection scene={scene} steps={steps} />
        </div>
    );
}

