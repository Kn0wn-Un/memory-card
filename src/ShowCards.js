import { useState } from 'react';
import './styles.css';
function ShowCards(props) {
    let [array, setArray] = useState(props.arr);
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    const mkArr = array.map((ele, index) => {
        return (
            <div
                className="card"
                key={index}
                onClick={() => {
                    props.handler(props.score + 1);
                    setArray(shuffleArray(array));
                }}
            >
                {ele}
            </div>
        );
    });
    return <div className="card-wrapper">{mkArr}</div>;
}

export default ShowCards;