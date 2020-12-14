import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import ShowCards from './ShowCards';
import heroes from './heroes';
function App() {
    const [score, setScore] = useState(0);
    const [highS, setHighS] = useState(0);
    const [clicked, setClicked] = useState([]);
    const checkClicked = (ele) => {
        if (clicked.indexOf(ele) === -1) {
            setScore(score + 1);
            clicked.push(ele);
            setClicked(clicked);
        } else {
            setScore(0);
            setClicked([]);
        }
    };
    useEffect(() => {
        if (score > highS) setHighS(score);
    }, [score, highS]);
    return (
        <div className="App">
            <NavBar score={score} highScore={highS} />
            <ShowCards arr={heroes} handler={checkClicked} score={score} />
            <div>
                <a href="https://github.com/Kn0wn-Un/memory-card">
                    {'Made with love <3'}
                </a>
            </div>
        </div>
    );
}

export default App;
