export default function OutputSection({scene, steps}) {
    return (
        <div>
            <hr />
            <h2>Output</h2>
            <h3>Scene</h3>
            <pre>
                {scene.serialize()}
            </pre>
            <h3>Steps</h3>
            <pre>

            </pre>
        </div>
    )
}

