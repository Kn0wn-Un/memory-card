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
                key={ele.id}
                onClick={() => {
                    props.handler(ele.id);
                    setArray(shuffleArray(array));
                }}
            >
                <img src={ele.img} alt={ele.name}></img>
                <div>{ele.name}</div>
            </div>
        );
    });
    return <div className="card-wrapper">{mkArr}</div>;
}

export default ShowCards;
