import './OutputSection.css'

export default function OutputSection({scene, steps}) {
    return (
        <div className="output-section">
            <hr />
            <h2>Output</h2>
            <h3>Scene</h3>
            <pre>
                {scene.serialize()}
            </pre>
            <h3>Steps</h3>
            <pre>
                {steps.map((step) => step.serialize(scene.id) + "\n")}
            </pre>
        </div>
    )
}

