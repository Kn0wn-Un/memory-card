import { useState } from 'react';
import './styles.css';
function NavBar(props) {
    const [inst, setInst] = useState(false);
    return (
        <nav>
            <div className="nav-wrapper">
                <h1>Memory Card</h1>
                <div className="navigation">
                    <span>Score: {props.score} | </span>
                    <span>Best: {props.highScore}</span>
                </div>
                <div
                    className="navigation"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        setInst(!inst);
                    }}
                >
                    Instructions
                </div>
            </div>
            {inst ? (
                <div className="info">
                    Cards Shuffle everytime you click on one, Don't click on the
                    same card twice easy :)
                </div>
            ) : null}
        </nav>
    );
}
export default NavBar;
