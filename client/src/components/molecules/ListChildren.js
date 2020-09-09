import React from 'react';

// My Components
import Image from "../atoms/Image";
import Text from "../atoms/Text";

function ListChildren(props) {
    const clickHandler = () => {
        alert(`TODO: あとで遷移するようにする -> index: ${props.index}`);
    };

    return (
        <li className="molecules-list-children" onClick={clickHandler}>
            <div>
                <Image src={props.src}/>
            </div>

            <div>
                <Text text={props.text} />
            </div>
        </li>
    );
}

export default ListChildren;
