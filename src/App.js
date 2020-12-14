import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import ShowCards from './ShowCards';
function App() {
    const arr = [...Array(12).keys()];
    const [score, setScore] = useState(0);
    const [highS, setHighS] = useState(0);
    useEffect(() => {
        if (score > highS) setHighS(score);
    }, [score, highS]);
    return (
        <div className="App">
            <NavBar score={score} highScore={highS} />
            <ShowCards arr={arr} handler={setScore} score={score} />
            <button
                onClick={() => {
                    setScore(0);
                }}
            >
                Reset
            </button>
        </div>
    );
}

export default App;
