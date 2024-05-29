export default function StepsSection({onPreviousClicked}) {
    return (
        <div>
            <h1>Steps</h1>
            <button onClick={onPreviousClicked}>Previous</button>
        </div>
    );
}
