import { useState } from 'react';
import './styles.css';
function NavBar(props) {
    const [inst, setInst] = useState(false);
    return (
        <nav>
            <div className="nav-wrapper">
                <h1>Memory Card</h1>
                <div className="navigation">
                    <div>High Score: {props.highScore}</div>
                    <div>Score: {props.score}</div>
                </div>
                <div
                    className="navigation"
                    onClick={() => {
                        setInst(!inst);
                    }}
                >
                    Instructions
                </div>
            </div>
            {inst ? (
                <div className="info">
                    How to play: Cards Shuffle everytime you click on one, Don't
                    click on the same card twice easy :)
                </div>
            ) : null}
        </nav>
    );
}
export default NavBar;
