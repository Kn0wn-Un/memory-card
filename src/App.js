import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import ShowCards from './ShowCards';
function App() {
    const arr = [...Array(12).keys()];
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
            <ShowCards arr={arr} handler={checkClicked} score={score} />
        </div>
    );
}

export default App;
