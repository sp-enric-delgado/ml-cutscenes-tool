export default function StepsSection(OnPreviousClicked) {
    return (
        <div>
            <h1>Steps</h1>
            <button onClick={() => OnPreviousClicked()}>Previous</button>
        </div>
    );
}
